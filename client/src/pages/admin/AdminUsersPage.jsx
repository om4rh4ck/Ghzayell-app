import { useEffect, useState } from "react";
import { apiRequest } from "../../api/client";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [pointsByUser, setPointsByUser] = useState({});

  const loadUsers = async () => {
    const data = await apiRequest("/admin/users");
    setUsers(data);
  };

  useEffect(() => {
    loadUsers().catch((err) => setError(err.message));
  }, []);

  const handleAddPoints = async (userId) => {
    const value = Number(pointsByUser[userId] || 0);
    if (!value) return;

    try {
      await apiRequest(`/admin/users/${userId}/points`, {
        method: "PATCH",
        body: JSON.stringify({ points: value })
      });
      setPointsByUser((current) => ({ ...current, [userId]: "" }));
      await loadUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Clients</span>
          <h1>Gestion des clients</h1>
          <p>Consultez vos clients et offrez facilement des points cadeaux.</p>
        </div>
      </section>
      {error && <p className="message error">{error}</p>}
      <section className="admin-users-grid">
        {users.map((user) => (
          <article key={user._id} className="card admin-user-card">
            <div className="admin-user-card__top">
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <span className={`admin-role-badge admin-role-badge--${user.role}`}>{user.role}</span>
            </div>

            <div className="admin-user-card__stats">
              <div className="admin-user-card__stat">
                <span>Points</span>
                <strong>{user.points}</strong>
              </div>
              <div className="admin-user-card__stat">
                <span>Compte</span>
                <strong>{user.role === "admin" ? "Administrateur" : "Client"}</strong>
              </div>
            </div>

            <div className="admin-user-card__gift">
              <label className="admin-field">
                <span>Ajouter des points cadeaux</span>
                <input
                  type="number"
                  min="0"
                  placeholder="Nombre de points"
                  value={pointsByUser[user._id] || ""}
                  onChange={(event) =>
                    setPointsByUser((current) => ({ ...current, [user._id]: event.target.value }))
                  }
                />
              </label>
              <button type="button" className="button-primary" onClick={() => handleAddPoints(user._id)}>
                Ajouter les points
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default AdminUsersPage;
