import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import Card1 from '../components/EcoGuide/Card1';
import SearchBar from '../components/EcoGuide/SearchBar';
import axios from 'axios';

const queryData = [
  { heading: "Home", query: "climate+adaptation+OR+climate+mitigation OR sustainable+transportation+OR+electric+vehicles OR ocean+conservation+OR+marine+ecosystem OR sustainable+agriculture+OR+organic+farming OR eco-tourism+OR+sustainable+travel OR impact+of+climate+policies+OR+carbon+tax" },
  { heading: "Climate Change Adaptation", query: "climate+adaptation+OR+climate+mitigation" },
  { heading: "Sustainable Transportation", query: "sustainable+transportation+OR+electric+vehicles OR public+transit+OR+shared+mobility" },
  { heading: "Ocean Conservation", query: "ocean+conservation+OR+marine+ecosystem OR coral+reef+preservation OR plastic+pollution+in+oceans" },
  { heading: "Sustainable Agriculture", query: "sustainable+agriculture+OR+organic+farming OR agroforestry+OR+precision+farming OR regenerative+agriculture" },
  { heading: "Eco-Tourism", query: "eco-tourism+OR+sustainable+travel OR eco-friendly+hotels+OR+carbon+neutral+travel" },
  { heading: "Impact of Climate Policies", query: "impact+of+climate+policies+OR+carbon+tax OR emissions+trading+OR+green+energy+subsidies" },
  { heading: "Renewable Energy", query: "renewable+energy+OR+solar+energy+OR+wind+power+OR+geothermal+energy+OR+hydropower" },
  { heading: "Energy Efficiency", query: "energy+efficiency+OR+smart+grids+OR+energy+storage+systems+OR+LED+lighting" },
  { heading: "Environmental Education", query: "environmental+education+OR+climate+awareness+campaigns+OR+sustainability+training" },
  { heading: "Circular Economy", query: "circular+economy+OR+waste+management+OR+recycling+innovations+OR+upcycling" },
  { heading: "Biodiversity Conservation", query: "biodiversity+conservation+OR+wildlife+protection+OR+endangered+species+OR+habitat+restoration" },
  { heading: "Green Technology", query: "green+technology+OR+clean+tech+OR+green+building+materials+OR+eco-friendly+innovations" },
  { heading: "Air Pollution", query: "air+pollution+OR+urban+air+quality+OR+particulate+matter+OR+industrial+emissions+control" },
  { heading: "Water Conservation", query: "water+conservation+OR+water+management+OR+drought+resilience+OR+desalination+technology" },
  { heading: "Forestry and Reforestation", query: "forestry+OR+reforestation+OR+afforestation+OR+forest+conservation+OR+deforestation+solutions" },
  { heading: "Sustainable Fashion", query: "sustainable+fashion+OR+eco-friendly+clothing+OR+ethical+fashion+OR+slow+fashion" },
  { heading: "Green Finance", query: "green+finance+OR+climate+finance+OR+sustainable+investing+OR+ESG+funds" },
  { heading: "Urban Sustainability", query: "urban+sustainability+OR+green+infrastructure+OR+smart+cities+OR+urban+resilience" },
  { heading: "Climate Justice", query: "climate+justice+OR+environmental+equity+OR+climate+refugees+OR+indigenous+rights+and+climate" },
  { heading: "Sustainable Business Practices", query: "sustainable+business+practices+OR+corporate+sustainability+OR+CSR+initiatives+OR+green+certifications" },
  { heading: "Electric and Autonomous Vehicles", query: "electric+vehicles+OR+autonomous+vehicles+OR+battery+technology+OR+EV+charging+infrastructure" },
  { heading: "Carbon Capture and Storage", query: "carbon+capture+OR+carbon+sequestration+OR+direct+air+capture+OR+CCUS" },
  { heading: "Green Building", query: "green+building+OR+LEED+certification+OR+energy+efficient+buildings+OR+net+zero+buildings" },
  { heading: "Environmental Policy and Law", query: "environmental+policy+OR+environmental+law+OR+climate+agreements+OR+environmental+regulations" },
  { heading: "Sustainable Urban Planning", query: "sustainable+urban+planning+OR+eco-friendly+architecture+OR+low+carbon+cities" }
];


const EcoGuide = () => {
  const [data, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(queryData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ startDate: "", endDate: "" }); // State for date filters

  const articlesPerPage = 12;

  useEffect(() => {
    if (selectedQuery) {
      fetchNewsData(selectedQuery.query);
      setCurrentPage(1);
    }
  }, [selectedQuery]);

  const fetchNewsData = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/news/`, {
        params: { query },
      });
  
      // Exclude articles without a title
      const validArticles = response.data.articles.filter(
        (article) => article.title && article.title.trim() !== ""
      );
  
      setData(validArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  
  

  // Handle filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter articles based on date range
  const filteredData = data.filter((article) => {
    const articleDate = new Date(article.publishedAt).getTime();
    const startDate = filters.startDate ? new Date(filters.startDate).getTime() : null;
    const endDate = filters.endDate ? new Date(filters.endDate).getTime() : null;

    return (
      (!startDate || articleDate >= startDate) &&
      (!endDate || articleDate <= endDate)
    );
  });

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredData.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(filteredData.length / articlesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* EcoGuide Title */}
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">EcoGuide</h1>

            {/* Search Bar */}
            <div className="sm:ml-auto w-1/2 md:w-1/3 lg:w-1/4">
              <SearchBar queryData={queryData} onSelect={setSelectedQuery} />
            </div>
          </div>



            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-4 gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>

              <span className="text-gray-800 font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>

            {/* Display Articles */}
            <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-gray-50 rounded-lg shadow-md">
              {currentArticles.length > 0 ? (
                currentArticles.map((article, index) => (
                  <Card1 key={index} data={article} />
                ))
              ) : (
                <p>No articles available for the selected filters.</p>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4 gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>

              <span className="text-gray-800 font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
};

export default EcoGuide;