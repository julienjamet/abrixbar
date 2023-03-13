export const Contact = () => {

    return (
        <div>
            <div className="contact">
                <img src="./contact.webp" alt="bar" width="1000px" />

                <div className="text">
                    <h2>Contact</h2>

                    <div className="main">
                        <div>
                            <h3>Adresse</h3>
                            <p>56 place de l'horloge 30700 Vallabrix</p>

                            <h3>Contact</h3>
                            <p>abrixbar@gmail.com</p>
                        </div>

                        <div>
                            <h3>Horaires d'ouverture</h3>

                            <div className="season">
                                <p><strong>Horaires d'été (d'avril à octobre)</strong></p>

                                <p>Du mardi au samedi 17h00 - 23h00</p>
                            </div>

                            <div className="season">
                                <p><strong>Horaires d'hiver (d'octobre à avril)</strong></p>

                                <p>Mardi et vendredi 17h00 - 19h00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}