import './style.css';

const Three = () => {
    return (<div>
        <h1>UK</h1>
        <p></p>

        <header>
            <h2>MANCHESTER</h2>
        </header>

        <section>
            <article>
                <h1>UK</h1>
                <p><strong>Welcome tchangeefeho Manchester</strong></p>
                <p>Manchester is a city and metropolitan borough of Greater Manchester, England, which had an estimated population
                    of 568,996 in 2022. It contributes to the third-most populous metropolitan area in the United Kingdom as a part
                    of Greater Manchester, which has a population of approximately 2.92 million. It is bordered by the Cheshire
                    Plain to the south, the Pennines to the north and east, and the neighbouring city of Salford to the west. The
                    city borders the boroughs of Trafford, Stockport, Tameside, Oldham, Rochdale, Bury and Salford.</p>
                <p>Manchester ranks among one of the most popular cities in the United Kingdom alongside Edinburgh and London.
                    It’s
                    also notable for being a bastion for culture and evolving trends in various fields like the arts, music,
                    science, and more. Manchester has the Band on the Wall, which played host to big names in punk music like Joy
                    Division and The Buzzcocks. You’ll also find numerous independent record stores keeping the love for vinyl
                    alive. Explore the bustling Northern Quarter to see some street art and discover chains of artisanal coffee
                    shops. Wander around at night and get acquainted with vibrant subcultures and off-hour festivities, especially
                    in music venues like YES and the Warehouse Project. </p>
                <p>Go on a food trip by going for a stroll around Ancoats. If
                    you’re looking to take spectacular photos to document your trip, then you can visit its architectural marvels
                    and celebrated landmarks like the John Rylands Library, the Town Hall, the Royal Exchange entertainment complex,
                    and Manchester Cathedral. You can also drop by institutions like the People’s History Museum and the Whitworth
                    Art Gallery to see the masterworks of artistic luminaries. If you’re a fan of the Manchester United football
                    club, you can indulge your fandom inside Old Trafford, the team’s home stadium.</p>
            </article>
            <img src="/images/Manchester.jpg" alt="Manchester" width="470" height="290" />
            <iframe width="470" height="290" src="https://www.youtube.com/embed/4IZZ9xd7cKc"
                title="48 hours in MANCHESTER, England | UK Travel Vlog | things to see and where to eat" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>

        <audio controls autoplay>
            <source src="better-day.mp3" type="audio/mp3" />
        </audio>

        <footer>
            <a href="/">back to the homepage</a>
        </footer>
    </div>)
}
export default Three;