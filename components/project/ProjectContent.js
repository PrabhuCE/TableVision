import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import image1 from '../../static/images/110_4_57.jpg';
import image2 from '../../static/images/115.jpg';
import image3 from '../../static/images/download3.jpeg';
import image4 from '../../static/images/download4.jpeg';
import image5 from '../../static/images/download5.jpeg';
import image6 from '../../static/images/download6.jpeg';
import Grid from '@material-ui/core/Grid';



const tileData = [
	{
		img: image1,
		description: 'Statement 1. TechSource Balance Sheet. The statement consists of 3 subheadings, 4 sections, 3 columns, and 26 rows. The headings of the columns, from left to right, are as follows: First column, no heading, Second column, December 31, and Third column, Changes Increase open parenthesis Decrease close parenthesis. December 31, is subdivided into 20Y7 and 20Y6. The row entries are as follows. The first subheading is Assets. Assets has the following rows. Assets has 2 sections. The first section is Current assets. Current assets has the following rows. First row: First column, Cash. December 31, 20Y7 column, $52,650. December 31, 20Y6 column, $36,200. Changes Increase open parenthesis Decrease close parenthesis column, $16,450. Next row: First column, Accounts receivable. December 31, 20Y7 column, 91,080. December 31, 20Y6 column, 53,000. Changes Increase open parenthesis Decrease close parenthesis column, 38,080. Next row: First column, Inventory. December 31, 20Y7 column, 62,150. December 31, 20Y6 column, 59,700. Changes Increase open parenthesis Decrease close parenthesis column, 2,450. Next row: First column, Estimated returns inventory. December 31, 20Y7 column, 5,300. December 31, 20Y6 column, 4,300. Changes Increase open parenthesis Decrease close parenthesis column, 1,000. Next row: First column, Office supplies. December 31, 20Y7 column, 480. December 31, 20Y6 column, 600. Changes Increase open parenthesis Decrease close parenthesis column, open parenthesis 120 close parenthesis. Next row: First column, Prepaid insurance. December 31, 20Y7 column, 2,650; there is a rule under it. December 31, 20Y6 column, 3,000; there is a rule under it. Changes Increase open parenthesis Decrease close parenthesis column, open parenthesis 350 close parenthesis; there is a rule under it. Last row: First column, Total current assets. December 31, 20Y7 column, $214,310; there is a rule under it. December 31, 20Y6 column, $156,800; there is a rule under it. Changes Increase open parenthesis Decrease close parenthesis column, $57,510; there is a rule under it. The next section is Property, plant, and equipment. Property, plant, and equipment has the following rows. First row: First column, Land. December 31, 20Y7 column, $20,000. December 31, 20Y6 column, $20,000.  Changes Increase open parenthesis Decrease close parenthesis column, $0. Next row: First column, Store equipment. December 31, 20Y7 column, 27,100. December 31, 20Y6 column, 20,000. Changes Increase open parenthesis Decrease close parenthesis column, 7,100. Next row: First column, Accumulated depreciation-store equipment. December 31, 20Y7 column, open parenthesis 5,700 close parenthesis. December 31, 20Y6 column, open parenthesis 2,600 close parenthesis. Changes Increase open parenthesis Decrease close parenthesis column, open parenthesis 3,100 close parenthesis. Next row: First column, Office equipment. December 31, 20Y7 column, 15,570. December 31, 20Y6 column, 10,000. Changes Increase open parenthesis Decrease close parenthesis column, 5,570. Next row: First column, Accumulated depreciation-office equipment. December 31, 20Y7 column, open parenthesis 4,720 close parenthesis; there is a rule under it. December 31, 20Y6 column, open parenthesis 2,230 close parenthesis; there is a rule under it.',
		html: 'author',
		csv:""
	},
	{
		img: image2,
		description: 'Statement 1. The heading of the T-account is Accounts Payable. Accounts Payable entries on the left side are as follows: First entry: May 2 6,000. Last entry: May 22 11,500. Accounts Payable entries on the right side are as follows: First entry: 21,000 May 1. Next entry: 500 May 5. Next entry: 8,500 May 15. Last entry: 500 May 23. ',
		html: 'author',
		csv:""
	},
	{
		img: image3,
		title: 'Image',
		author: 'author',
	},
	{
		img: image4,
		title: 'Image',
		author: 'author',
	},
	{
		img: image5,
		title: 'Image',
		author: 'author',
	},
	{
		img: image6,
		title: 'Image',
		author: 'author',
	},
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image2,
		title: 'Image',
		author: 'author',
	},
	{
		img: image3,
		title: 'Image',
		author: 'author',
	},
	{
		img: image4,
		title: 'Image',
		author: 'author',
	}
];

export default class ProjectContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabValue: 0,
			imageSelected: tileData[0].img,
			selectedIndex: 0
		}
	}
	
	handleChange = (event, newValue) => {
		this.setState({ tabValue: newValue });
	};

	loadContent = () => {
		// change content based on tab and Image
		if (this.state.tabValue == 0) {
			return (
				<div style={{overflow:"scroll",height: "380px"}}>
					{tileData[this.state.selectedIndex].description}
				</div>
			)
		}
		if (this.state.tabValue == 1) {
			return (
				<div>
					{this.state.selectedIndex == 0 ? <p>reerer </p> : <p>ssss</p>}
				</div>
			)
		}
		if (this.state.tabValue == 2) {
			return (
				<div style={{padding:"40px"}}>
					<button type="button" style={{height:"50px"}}>
						<a href={this.state.imageSelected} download>Download CSV</a>
					</button>
				</div>
			)
		}
	}

	render() {	
		const handleImageClicked = (index) => {
			this.setState({ imageSelected: tileData[index].img, selectedIndex: index });
		}
		return (
			<div>
				<div>
					<Grid container spacing={3} style={{padding:"40px"}}>
						<Grid item xs={12} md={6} lg={6} >
							<img src={this.state.imageSelected} style={{ height: "460px", width: "540px" }} />
						</Grid>
						<Grid item xs={12} md={6} lg={6} style={{ borderColor: "#e2dfdf", borderRadius: "1px", borderStyle: "solid",height: "460px", width: "540px" }}>
							<Tabs
								value={this.state.tabValue}
								onChange={this.handleChange}
								indicatorColor="#176529"
								textColor="primary"
								variant="fullWidth"
								style={{backgroundColor:"#c2e8c8"}}
								aria-label="full width tabs example"
							>
								<Tab label="Alt Text" />
								<Tab label="HTML" />
								<Tab label="CSV" />
							</Tabs>
							<div>
								{this.loadContent()}</div>
						</Grid>
					</Grid>
				</div>
				<div style={{display:"flex",overflow:"scroll"}}>
						{tileData.map((tile, index) => (
							<img src={tile.img} style={{padding:"5px",height:"200px",width:"200px"}} onClick={() => { handleImageClicked(index) }} alt={tile.title} />	
						))}
				</div>
			</div>
		);
	}
}

