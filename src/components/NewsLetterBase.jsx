const NewsletterBase = () => {
  return (
    <>
      <table
        style={{
          maxWidth: "600px",
          padding: "10px",
          margin: "0 auto",
          borderCollapse: "collapse",
          border: "4px solid black",
        }}
      >
        <tr>
          <td
            style={{
              color: "white",
              backgroundColor: "rgb(85, 85, 85)",
              textAlign: "center",
              padding: "0",
            }}
          >
            <h1
              style={{
                color: "rgb(0, 201, 60)",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <span
                style={{ fontSize: "3rem", textDecoration: "underline black" }}
              >
                {" "}
                Oferta{" "}
              </span>{" "}
              <br />
              Los nuevos clientes tienes de<br />  DigitalEvolution S.A
            </h1>
            <h3 style={{ fontSize: "1.5rem" }}>
              ¡Solo hasta el XX de XXXXXXXXX!
            </h3>
            <p style={{ fontSize: "1.5rem",padding: "50px" }}>
              Tendrá un descuento del{" "}
              <span
                style={{
                  fontSize: "1.7rem",
                  color: "rgba(0, 176, 53, 1)",
                  fontWeight: "bold",
                }}
              >
                20%
              </span><br />{" "}
               en soluciones aplicadas en su web
            </p>
            <img
              style={{ maxWidth: "600px", border: "2px solid rgb(32, 32, 32)" }}
              src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1566492620/content-items/003/212/919/2-original.png?1566492620"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: "white",
              backgroundColor: "rgb(85, 85, 85)",
              textAlign: "center",
              padding: "0",
            }}
          >
            <div>
              <h1
                style={{
                  color: "rgb(0, 201, 60)",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                Te esperamos
              </h1>
              <h3 style={{ fontSize: "1.5rem", width: "80%", margin: "auto" }}>
                Pasa por la web para ver más de nuestro trabajo
              </h3>
              <a
                style={{
                  width: "20%",
                  padding: "8px 16px",
                  margin: "auto",
                  marginTop: "32px",
                  border: "3px solid rgb(255, 255, 255)",
                  borderRadius: "25px",
                  display: "block",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: "all 0.5s ease",
                  textDecoration: "none",
                }}
                href="https://iaw-portafolio-2024.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Aquí
              </a>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h1
                style={{
                  color: "rgb(0, 201, 60)",
                  marginTop: "50px",
                  marginBottom: "20px",
                  fontSize: "2.5rem",
                }}
              >
                Contacto
              </h1>
              <h2
                style={{
                  marginBottom: "10px",
                  textDecoration: "underline black",
                }}
              >
                Dirección
              </h2>
              <h3 style={{ marginBottom: "20px" }}>
                Palma de Mallorca, Islas Baleares, España
              </h3>
              <h2
                style={{
                  marginBottom: "10px",
                  textDecoration: "underline black",
                }}
              >
                Teléfonos de contacto
              </h2>
              <div>
                <h4>+34 600 000 000 </h4>
                <h4>+34 900 000 000 </h4>
              </div>
              <h2
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  textDecoration: "underline black",
                }}
              >
                Email
              </h2>
              <h4 style={{ fontSize: "1.5rem" }}>acl@gmail.com </h4>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};
export default NewsletterBase;
