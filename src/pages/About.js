
import gradi from '../images/gradi.gif'
export default function About() {
    return (

        <div class="card" style={{
            width: "50rem",
            height: "30rem",
            margin: " 0 auto",
            marginTop: "100px",
            float: "none",
            background: " #d4f4f5"
        }}>
            <div className="card-body">
                <img src={gradi}
                    alt="About"
                    className="card-img-top"
                    style={{ width: "39rem", margin: "0px auto" }} />
                <p style={{ textAlign: "center", color: "#0dcaf0" }}> Mediul educational permite dezvoltarea libera a copilului, explorarea activa si interactiunea variata cu materialele, cu ceilalti copii si cu adultii.</p>
                <p style={{ textAlign: "center", color: "#0dcaf0" }}> Misiunea gradinitei noastre este aceea de a asigura un invatamant prescolar la nivel european: un curriculum diferentiat, centrat pe nevoile curente si de viitor ale copiilor si parintilor, care sa contribuie la integrarea si adaptarea cu succes in activitatea scolara si in societate.</p>
            </div>
        </div>
    )
}