import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';
import '../../styles/index.css';
import Chat from '../../components/Chat';
function Home() {
    return (
        <div className="">
            <Header />
            <Layout>
                <main className="dark">
                    <div className="relative max-w-7xl mx-auto z-1">
                        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-hidden">
                            <div className="bg-gray p-8 rounded-lg w-100 h-130 overflow-y-auto bg-opacity-50">

                                <Chat />
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;
