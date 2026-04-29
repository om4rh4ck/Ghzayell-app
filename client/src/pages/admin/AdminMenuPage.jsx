import { useEffect, useState } from "react";
import { apiFormRequest, apiRequest, getMediaUrl } from "../../api/client";

const CUSTOM_CATEGORY_VALUE = "__custom__";
const defaultCategories = ["Sandwich", "BRIKA", "S7AN", "3EJJA", "LABLEBI", "HAJA TETCHRAB", "Boissons"];

const initialForm = {
  _id: "",
  name: "",
  description: "",
  price: "",
  category: "Sandwich",
  image: "",
  promoActive: false,
  promoLabel: "",
  promoPrice: ""
};

function AdminMenuPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editForm, setEditForm] = useState(initialForm);
  const [categories, setCategories] = useState(defaultCategories);
  const [categorySelection, setCategorySelection] = useState("Sandwich");
  const [customCategory, setCustomCategory] = useState("");
  const [editCategorySelection, setEditCategorySelection] = useState("Sandwich");
  const [editCustomCategory, setEditCustomCategory] = useState("");
  const [file, setFile] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const loadProducts = async () => {
    const data = await apiRequest("/products");
    setProducts(data);
  };

  useEffect(() => {
    const loadData = async () => {
      const [productsData, categoriesData] = await Promise.all([
        apiRequest("/products"),
        apiRequest("/products/categories").catch(() => [])
      ]);

      setProducts(productsData);
      const mergedCategories = Array.from(
        new Set(
          [...defaultCategories, ...categoriesData.filter((category) => category && category !== "All")]
            .map((category) => category.trim())
            .filter(Boolean)
        )
      );
      setCategories(mergedCategories);
    };

    loadData().catch((err) => {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    });
  }, []);

  const normalizeCategoryPayload = (selection, customValue) =>
    selection === CUSTOM_CATEGORY_VALUE ? customValue.trim() : selection.trim();

  const syncCreateCategory = (selection, nextCustomValue = customCategory) => {
    const resolvedCategory = normalizeCategoryPayload(selection, nextCustomValue);
    setCategorySelection(selection);
    setCustomCategory(selection === CUSTOM_CATEGORY_VALUE ? nextCustomValue : "");
    setForm((current) => ({ ...current, category: resolvedCategory }));
  };

  const syncEditCategory = (selection, nextCustomValue = editCustomCategory) => {
    const resolvedCategory = normalizeCategoryPayload(selection, nextCustomValue);
    setEditCategorySelection(selection);
    setEditCustomCategory(selection === CUSTOM_CATEGORY_VALUE ? nextCustomValue : "");
    setEditForm((current) => ({ ...current, category: resolvedCategory }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      if (file) {
        const formData = new FormData();
        Object.entries(form)
          .filter(([key]) => key !== "_id")
          .forEach(([key, value]) => formData.append(key, value));
        formData.append("image", file);
        await apiFormRequest("/products", formData, "POST");
      } else {
        await apiRequest("/products", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            description: form.description,
            price: Number(form.price),
            category: form.category,
            image: form.image,
            promoActive: form.promoActive,
            promoLabel: form.promoLabel,
            promoPrice: form.promoPrice === "" ? null : Number(form.promoPrice)
          })
        });
      }

      setForm(initialForm);
      setCategorySelection("Sandwich");
      setCustomCategory("");
      setFile(null);
      await loadProducts();
      setCategories((current) =>
        Array.from(new Set([...current, normalizeCategoryPayload(categorySelection, customCategory)].filter(Boolean)))
      );
      setSuccessMessage("Produit ajoute avec succes.");
    } catch (err) {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    }
  };

  const handleDelete = async (id) => {
    setError("");
    setSuccessMessage("");

    try {
      await apiRequest(`/products/${id}`, { method: "DELETE" });
      await loadProducts();
      setSuccessMessage("Produit supprime avec succes.");
    } catch (err) {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    }
  };

  const handleEdit = (product) => {
    const knownCategory = categories.includes(product.category);
    setEditForm({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image || "",
      promoActive: Boolean(product.promoActive),
      promoLabel: product.promoLabel || "",
      promoPrice: product.promoPrice ?? ""
    });
    setEditCategorySelection(knownCategory ? product.category : CUSTOM_CATEGORY_VALUE);
    setEditCustomCategory(knownCategory ? "" : product.category || "");
    setEditFile(null);
    setError("");
    setSuccessMessage("");
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setEditForm(initialForm);
    setEditFile(null);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      if (editFile) {
        const formData = new FormData();
        Object.entries(editForm)
          .filter(([key]) => key !== "_id")
          .forEach(([key, value]) => formData.append(key, value));
        formData.append("image", editFile);
        await apiFormRequest(`/products/${editForm._id}`, formData, "PUT");
      } else {
        await apiRequest(`/products/${editForm._id}`, {
          method: "PUT",
          body: JSON.stringify({
            name: editForm.name,
            description: editForm.description,
            price: Number(editForm.price),
            category: editForm.category,
            image: editForm.image,
            promoActive: editForm.promoActive,
            promoLabel: editForm.promoLabel,
            promoPrice: editForm.promoPrice === "" ? null : Number(editForm.promoPrice)
          })
        });
      }

      await loadProducts();
      setCategories((current) =>
        Array.from(new Set([...current, normalizeCategoryPayload(editCategorySelection, editCustomCategory)].filter(Boolean)))
      );
      closeEditModal();
      setSuccessMessage("Le produit selectionne a ete mis a jour avec succes.");
    } catch (err) {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Produits</span>
          <h1>Gestion du menu</h1>
          <p>Ajoutez vos produits, activez des promos et gardez une carte claire.</p>
        </div>
      </section>

      {successMessage && <p className="message success">{successMessage}</p>}
      {error && <p className="message error">{error}</p>}

      <section className="card admin-form-card">
        <div className="admin-card-header">
          <h2>Ajouter un produit</h2>
          <span>Nouveau produit</span>
        </div>
        <form className="admin-form admin-form--products" onSubmit={handleSubmit}>
          <input
            placeholder="Nom"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            required
          />
          <select value={categorySelection} onChange={(event) => syncCreateCategory(event.target.value)} required>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value={CUSTOM_CATEGORY_VALUE}>Nouvelle categorie</option>
          </select>
          {categorySelection === CUSTOM_CATEGORY_VALUE ? (
            <input
              placeholder="Nom de la nouvelle categorie"
              value={customCategory}
              onChange={(event) => syncCreateCategory(CUSTOM_CATEGORY_VALUE, event.target.value)}
              required
            />
          ) : null}
          <input
            type="number"
            step="0.01"
            placeholder="Prix"
            value={form.price}
            onChange={(event) => setForm((current) => ({ ...current, price: event.target.value }))}
            required
          />
          <input
            placeholder="URL de l'image"
            value={form.image}
            onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))}
          />
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={form.promoActive}
              onChange={(event) => setForm((current) => ({ ...current, promoActive: event.target.checked }))}
            />
            <span>Promo active</span>
          </label>
          <input
            placeholder="Libelle promo"
            value={form.promoLabel}
            onChange={(event) => setForm((current) => ({ ...current, promoLabel: event.target.value }))}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Prix promo"
            value={form.promoPrice}
            onChange={(event) => setForm((current) => ({ ...current, promoPrice: event.target.value }))}
          />
          <input type="file" accept="image/*" onChange={(event) => setFile(event.target.files?.[0] || null)} />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
            required
          />
          <div className="split">
            <button type="submit" className="button-primary">Ajouter le produit</button>
          </div>
        </form>
      </section>

      <section className="product-grid admin-product-grid">
        {products.map((product) => (
          <article key={product._id} className="card product-card admin-product-card">
            <img src={getMediaUrl(product.image)} alt={product.name} className="product-card__image" />
            <div className="product-card__body">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <strong>{product.price.toFixed(2)} DT</strong>
              {product.promoActive && product.promoPrice ? (
                <p className="admin-product-card__promo">
                  Promo: {product.promoLabel || "Offre"} - {Number(product.promoPrice).toFixed(2)} DT
                </p>
              ) : null}
              <div className="split admin-product-card__actions">
                <button type="button" className="button-primary" onClick={() => handleEdit(product)}>
                  Modifier
                </button>
                <button type="button" className="button-secondary" onClick={() => handleDelete(product._id)}>
                  Supprimer
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {isEditOpen && (
        <div className="admin-modal-backdrop" role="presentation" onClick={closeEditModal}>
          <section
            className="admin-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-edit-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="admin-card-header">
              <div>
                <h2 id="admin-edit-title">Modifier le produit</h2>
                <span>Mettre a jour le produit selectionne</span>
              </div>
              <button type="button" className="button-secondary admin-modal__close" onClick={closeEditModal}>
                Fermer
              </button>
            </div>

            <form className="admin-form admin-form--products" onSubmit={handleEditSubmit}>
              <input
                placeholder="Nom"
                value={editForm.name}
                onChange={(event) => setEditForm((current) => ({ ...current, name: event.target.value }))}
                required
              />
              <select value={editCategorySelection} onChange={(event) => syncEditCategory(event.target.value)} required>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
                <option value={CUSTOM_CATEGORY_VALUE}>Nouvelle categorie</option>
              </select>
              {editCategorySelection === CUSTOM_CATEGORY_VALUE ? (
                <input
                  placeholder="Nom de la nouvelle categorie"
                  value={editCustomCategory}
                  onChange={(event) => syncEditCategory(CUSTOM_CATEGORY_VALUE, event.target.value)}
                  required
                />
              ) : null}
              <input
                type="number"
                step="0.01"
                placeholder="Prix"
                value={editForm.price}
                onChange={(event) => setEditForm((current) => ({ ...current, price: event.target.value }))}
                required
              />
              <input
                placeholder="URL de l'image"
                value={editForm.image}
                onChange={(event) => setEditForm((current) => ({ ...current, image: event.target.value }))}
              />
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={editForm.promoActive}
                  onChange={(event) => setEditForm((current) => ({ ...current, promoActive: event.target.checked }))}
                />
                <span>Promo active</span>
              </label>
              <input
                placeholder="Libelle promo"
                value={editForm.promoLabel}
                onChange={(event) => setEditForm((current) => ({ ...current, promoLabel: event.target.value }))}
              />
              <input
                type="number"
                step="0.01"
                placeholder="Prix promo"
                value={editForm.promoPrice}
                onChange={(event) => setEditForm((current) => ({ ...current, promoPrice: event.target.value }))}
              />
              <input type="file" accept="image/*" onChange={(event) => setEditFile(event.target.files?.[0] || null)} />
              <textarea
                placeholder="Description"
                value={editForm.description}
                onChange={(event) => setEditForm((current) => ({ ...current, description: event.target.value }))}
                required
              />
              <div className="split">
                <button type="submit" className="button-primary">Enregistrer les modifications</button>
                <button type="button" className="button-secondary" onClick={closeEditModal}>
                  Annuler
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default AdminMenuPage;
