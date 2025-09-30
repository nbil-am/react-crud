import Card from "../components/Card";

const Home = () => {
    return (
        <main>
            <div className="container grid grid-cols-3 gap-4 mx-auto my-20">
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}

export default Home;