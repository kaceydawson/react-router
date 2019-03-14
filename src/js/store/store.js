const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			sections: [
				{
					title: "BLOG",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				},
				{
					title: "BLOG 2",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS 2",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				},
				{
					title: "BLOG",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				},
				{
					title: "BLOG 2",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS 2",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				}
			],
			cartStore: [
				{
					productName: "Part number 1",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "25",
					productDescription: "Short description of item 1"
				},
				{
					productName: "Part number 2",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "100",
					productDescription: "Short description of item 2"
				},
				{
					productName: "Part number 3",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "47.99",
					productDescription: "Short description of item 3"
				}
			],
			blogInfo: [
				{
					blogTitle: "Blog 1",
					blogSummary:
						"First couple of Lines of the blog genrally this will contain important information",
					blogAuthor: "Angelo Martinez",
					blogDate: "October 10 1996",
					blogFavorite: false,
					blogImage:
						"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
				},
				{
					blogTitle: "Blog 2",
					blogSummary:
						"First couple of Lines of the blog genrally this will contain important information, different from blog 2 and three",
					blogAuthor: "Joe Martinez",
					blogDate: "October 11 1997",
					blogFavorite: false,
					blogImage:
						"http://demo.warptheme.com/images/placeholder_600x400_2.svg"
				},
				{
					blogTitle: "Blog 3",
					blogSummary:
						"First couple of Lines of the blog genrally this will contain important information, maybe has more lines than the next post checking length.",
					blogAuthor: "Gunther Martinez",
					blogDate: "October 12 1998",
					blogFavorite: false,
					blogImage:
						"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
