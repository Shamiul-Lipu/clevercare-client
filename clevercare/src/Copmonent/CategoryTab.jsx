import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";

const CategoryTab = () => {
  const toyCategories = [
    "Mathematics",
    "Science and Discovery Kits",
    "Language and Literacy Kits",
    "Language and Literacy Kits",
    "Arts and Crafts Kits",
  ];

  // useEffect(() => {
  //     fetch(`https://server-side-rho-one.vercel.app/all_toy_data?categoryName=${Mathematics}`)
  //         .then(res => res.json())
  //         .the(data => console.log(data))
  // }, [])
  return (
    <div className="py-12 px-2">
      <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">
        Browse Products By Category
      </h3>
      <Tabs>
        <TabList className={`bg-slate-300 rounded-lg`}>
          {toyCategories.map((categoryTab, i) => (
            <Tab key={i}>
              <h3 className="text-bold">{categoryTab}</h3>
            </Tab>
          ))}
        </TabList>
        {toyCategories &&
          toyCategories.map((categoryTab, i) => (
            <TabPanel key={i}>
              <Category categoryTab={categoryTab}></Category>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default CategoryTab;
