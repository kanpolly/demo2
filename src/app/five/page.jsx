import './style.css';
const Five = () => {
    return (
        <div>




            <h2>HONG KONG</h2>
            <p></p>

            <header>
                <h2>HONG KONG</h2>
            </header>

            <section>
                <article>
                    <h1>Hong Kong</h1>
                    <p><strong>Welcome to Hong Kong</strong></p>
                    <p>Hong Kong is a special administrative region of the People's Republic of China. With 7.4 million residents of
                        various nationalities in a 1,104-square-kilometre (426 sq mi) territory, Hong Kong is the fourth most densely
                        populated region in the world.
                        Hong Kong is a highly developed territory and has a Human Development Index (HDI) of 0.956, ranking fourth in
                        the world and currently the only place in Asia to be in the top 5. The city has the highest life expectancy in
                        the world, and a public transport usage exceeding 90 per cent.
                    </p>
                    <p>Explore the best of Hong Kong in a day. We may have lots of top city attractions in a day—including Victoria
                        Peak, Peak Tower,Aberdeen Fishing Village, Repulse Bay, Stanley Market and Harbour Victoria </p>
                    <ol>
                        <li><strong>Victoria Peak</strong> Victoria Peak is a hill on the western half of Hong Kong Island. It is also
                            known as Mount Austin, and
                            locally as The Peak. With an elevation of 552 m, it is the highest hill on Hong Kong island</li>
                        <li><strong>Peak Tower</strong> The Peak Tower is standing at 428 meters above sea level and is the highest
                            viewing platform in
                            Hong Kong offering a stunning 360-degree panoramic view across the Hong Kong. Whether you visit The Peak in
                            the morning, afternoon or nighttime, Sky Terrace 428 is a scenic spot
                            that you should not miss!</li>
                        <li><strong> Aberdeen Fishing Village </strong> Aberdeen is a town sited on the south side of Hong Kong Island.
                            The town's most
                            famous feature is Aberdeen Harbour, which lies between Aberdeen and the island Ap Lei Chau. In Aberdeen,
                            modernity meets tradition with skyscrapers overlooking a community living on traditional junks.</li>
                        <li><strong> Repulse Bay Beach</strong> Repulse Bay is a bay in the southern part of Hong Kong Island. It is one
                            of the most
                            expensive residential areas in Hong Kong</li>
                        <li><strong>Stanley Market</strong> Stanley Market is a street market in Stanley on Hong Kong Island, Hong Kong.
                            The street is a
                            typical example of a traditional old open-air market in Hong Kong</li>
                        <li><strong> Harbour Victoria</strong> Harbour is a natural landform harbour separating Hong Kong Island in the
                            south
                            from the Kowloon Peninsula to the north. The harbour's deep, sheltered waters and strategic location on the
                            South China Sea were instrumental in Hong Kong's establishment as a British colony and its subsequent
                            development as a trading centre.</li>
                    </ol>

                </article>
                {/* </section> */}
                <img src="/images/hongkong.jpg" alt="" width="480" height="290" />
                <iframe width="500" height="290" src="https://www.youtube.com/embed/wC7uTbvcQ_4?si=NI8eHmsDqYArW7FS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <audio controls autoplay>
                <source src="better-day.mp3" type="audio/mp3" />
            </audio>

            <footer>
                <a href="/">back to the homepage</a>
            </footer>

        </div>
    )
}
export default Five;