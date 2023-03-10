export const Season = () => {

    return (
        <>
            <div className="season">
                <div className="month">
                    <h2>Mars 2023</h2>
                    <div className="programmation">
                        <div>
                            <h5>le 5 mars</h5>
                            <img src="./mars1.webp" alt="event 1" width="400px" />
                        </div>

                        <div>
                            <h5>le 11 mars</h5>
                            <img src="./mars2.webp" alt="event 1" width="400px" />
                        </div>

                        <div>
                            <h5>le 11 mars</h5>
                            <img src="./mars3.webp" alt="event 1" width="400px" />
                        </div>
                    </div>
                </div>

                <div className="month">
                    <h2>Avril 2023</h2>
                    <div className="programmation">
                        <div>
                            <h5>le 7 avril</h5>
                            <figure>
                                <img src="./avril1.webp" alt="event 1" width="400px" />
                                <figcaption>En partenariat avec l'Ombrière, billetterie <a href="https://lombriere.fr/event/les-instants-abrix/?fbclid=IwAR3ATTXy1xVWRgDx1DatTyswLQkLs6qv2iKAVkQG8KJK5HRY81g69Fw3Jp0" target="_blank" rel="noreferrer">ici</a></figcaption>
                            </figure>

                        </div>
                    </div>
                </div>

                <div className="month">
                    <h2>Juin 2023</h2>
                    <div className="programmation">
                        <div>
                            <h5>le 23 juin</h5>
                            <h5>THE SUMMER REBELLION</h5>
                            <img src="./juin1.webp" alt="event 1" width="400px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}