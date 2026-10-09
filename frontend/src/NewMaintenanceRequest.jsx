import { useState } from "react";
import "./NewMaintenanceRequest.css";

function NewMaintenanceRequest() {
  // Lomakkeen kenttien tilanhallinta käyttäen state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const maintenanceRequest = {
      title,
      description,
      category,
    };

    console.log(maintenanceRequest);
  };

  return (
    <div className="maintenance-page">
      <div className="maintenance-content">
        <h1>Uusi huoltopyyntö</h1>

        <p className="maintenance-intro">
          Ilmoita uusi asuntoosi liittyvä huoltotarve
        </p>

        <form onSubmit={handleSubmit} className="maintenance-form">
          <div className="form-group">
            <label htmlFor="title">Otsikko</label>

            <input
              id="title"
              type="text"
              placeholder="esim. Keittiön hana vuotaa"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Kuvaus</label>

            <textarea
              id="description"
              placeholder="Kuvaile huoltotarvetta..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Kategoria</label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option value="">Valitse kategoria</option>
              <option value="water">Vesi ja viemäri</option>
              <option value="electricity">Sähkö</option>
              <option value="heating">Lämmitys</option>
              <option value="apartment">Asunto</option>
              <option value="other">Muu</option>
            </select>
          </div>

          <button type="submit">Tee uusi huoltopyyntö</button>
        </form>
      </div>
    </div>
  );
}

export default NewMaintenanceRequest;
