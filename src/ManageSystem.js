import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader'
import StaffItemPanel from './StaffItemPanel'
import StaffFooter from './StaffFooter'
import StaffDetail from './StaffDetail'
import './css/style.less'
import Staff from './STAFF'




class App extends React.Component{
	constructor() {
		super();
		this.state = {
			staff:new Staff,
			staffDetail:null
		}
	}
	//增
	addStaffItem(item){
		this.setState({
			staff:this.state.staff.addStaffItem(item)
		})
	}
	//搜
	searchStaff(word) {
		this.setState({
			staff:this.state.staff.searchStaff(word)
		})
	}

	//删
	removeStaffItem(key){
		this.setState({
			staff:this.state.staff.removeStaffItem(key)
		})
	}

	//打开
	openStaffDetail(key){
		this.setState({
			staffDetail:this.state.staff.staff.filter(item => {
				return item.key == key
			})[0]

		})
	}
	//修改
	modifyStaff(item){
		this.setState({
			staff:this.state.staff.modifyStaff(item)
		})
	}
	//关闭
	closeStaffDetail() {
		this.setState({
			staffDetail:null
		})
	}

	filterStaffDetail(keyword) {
		this.setState({
			staff:this.state.staff.filterStaffDetail(keyword)
		})
	}

	render(){
		return(
			<div>
				<StaffHeader searchStaff = {this.searchStaff.bind(this)} filterStaffDetail={this.filterStaffDetail.bind(this)}/>
				<StaffItemPanel items = {this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} openStaffDetail = {this.openStaffDetail.bind(this)} />
				<StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
				<StaffDetail staffDetail ={this.state.staffDetail} modifyStaff={this.modifyStaff.bind(this)} closeStaffDetail = {this.closeStaffDetail.bind(this)}/>
			</div>
			)
	}
}
ReactDOM.render(<App/>,document.getElementById('app'))               