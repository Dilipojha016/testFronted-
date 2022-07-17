import React, { useState, useEffect } from "react";
import DashboardHead from "../../Components/shared/DashboardHead";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "../../Components/search";
import PerPage from "../../Components/perPage";
import THEAD from "../../Components/thead";
import TBODY from "./itemTemplate";
import { itemList} from '../../Redux/Actions/ItemAction';
import Pagination from "../../Components/Pagination";
import { useDispatch,useSelector } from 'react-redux';
import LinkButton from "../../Components/LinkButton";
export default function UserManagement(props) {
	const initialState = {
		id:"",
		status:"",
		deleteModelIsVisible: false,
		perPage: 10,
		totalPage: 0,
		activePage:0,
		userCount:1,
		page:true,
		itemList:[],
		search:'',
        tableRow :[
            {
              name:"Name",
              active:false,
              sortingName:"name",
    
            },
            {
              name:"Price",
              active:false,
              sortingName:"price",
    
            },
			{
              name:"Quantity",
              active:false,
              sortingName:"quantity",
    
            },
            {
              name:"Image",
              active:false,
              sortingName:"image",
    
            },
        ]
	};
	const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const list = useSelector(state=>state.ItemListReducer)
	useEffect(() => {
		dispatch(itemList({pageNo:state.activePage+1,limit:state.perPage}))
	}, [state.activePage,state.perPage]);
	useEffect(()=>{
		
		if(list && list.itemData && list.itemData.data){
			setState((prevState) => {
				return {
					...prevState,
					itemList : list.itemData.data
					
				};
			});
		}
	},[list])
	
	const handleOnSearch = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				activePage:0,
				search:  e.target.value,
				
			};
		});
	};	
	const onChangePerPage = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				activePage:0,
				perPage:parseInt(e.target.value),
				
			};
		});
	};
	const handlePageChange = (page) => {
		setState((prevState) => {
			return {
				...prevState,
				activePage: parseInt(page) 
				
			};
		});
		
	};
	
	return(
	
	<div className="FormAndHidden">
	<ToastContainer autoClose={8000} />
	<DashboardHead
		secondaryHeadingOne="Items "
		secondaryHeadingTwo="  "
		secondaryHeadingThree="  "
		description=""
	/>
	{<LinkButton name="Add" path="addItem" /> }
	<div className="row">
	   <div className="col-sm-12">
		  <div className="primary-card">
			 <div className="row">
				<div className="col-6">
					<Search 
					value={state.search}
					onChange={(e) => handleOnSearch(e)}
					/>  
				</div>
				<div className="col-6">
				   	<PerPage 
					perPage={state.perPage}
					onChange={(e) => onChangePerPage(e)}
					/>   
				</div>
			</div>
			 <div className="table-responsive tablefixed">
			 			 
				<table className="table table-borderless organic-table">
					<THEAD tableColumn={state.tableRow}  action={false}/>
					<TBODY tableRow={state.itemList} activePage={state.activePage} perPage={state.perPage} />

				</table>
				{state.page && state.userCount > 0 ? (
					<Pagination
						pages={state.totalPage}
						activePage={state.activePage}
						onPageChange={handlePageChange}
					/>
				) : null}

				
			 </div>
			</div>
	   </div>
	</div>

 </div >
);
}
