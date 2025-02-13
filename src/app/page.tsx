import Navbar from "../components/Navbar";
import FeaturedStory from "../components/FeaturedStory";
import RecentStories from "../components/RecentStories";
import Footer from "../components/Footer";

const Home = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow bg-gray-300">
      <FeaturedStory />
      <RecentStories />
    </main>
    <Footer />
  </div>
);

export default Home;