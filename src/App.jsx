import './App.css';
import { Link, Outlet } from 'react-router';

function App() {
  return (
    <>
      <div className="app">
        <aside>
          <ul>
            <li>
              <Link to="/">Panel</Link>
            </li>
            <li>
              <Link to="inventario">Inventario</Link>
            </li>
          </ul>
        </aside>
        <header>
          <h2>Panel</h2>
          <p>información del estado</p>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export function Dashboard() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <span>Nombre</span>
          10
        </div>
        <div className="card">
          <span>Nombre</span>
          10
        </div>
        <div className="card">
          <span>Nombre</span>
          10
        </div>
        <div className="card">
          <span>Nombre</span>
          10
        </div>
      </div>
      <table>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </table>
    </>
  );
}

export function Inventory() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
           <tr>
            <td>2000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
           <tr>
            <td>3000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
           <tr>
            <td>4000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
           <tr>
            <td>5000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
           <tr>
            <td>6000</td>
            <td>Impresión</td>
            <td>10</td>
            <td>1.000</td>
            <td>10.000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App
