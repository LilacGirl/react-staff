import React from 'react';
import ReactDOM from 'react-dom';


export default class StaffHeader extends React.Component{
	
	handlerSearch(){
		let bar = ReactDOM.findDOMNode(this.refs.searchBar);
		let value = bar.value;
		this.props.searchStaff(value);
	}
	filterStaffDetail(){
		let selId = ReactDOM.findDOMNode(this.refs.selId);
		let value = selId.options[selId.selectedIndex].value;
		this.props.filterStaffDetail(value)
	}

	render(){
		return(
			<div>
				<h3 style={{'textAlign':'center'}}>人员管理系统</h3>
					<table className="optHeader">
		                <tbody>
		                  <tr>
		                    <td className="headerTd"><input type='text' ref='searchBar' placeholder='Search...' onChange={this.handlerSearch.bind(this)} /></td>
		                    <td className="headerTd">
		                        <label for='idSelect'>人员筛选</label>
		                        <select id='idSelect' ref="selId" onChange = {this.filterStaffDetail.bind(this)}>
		                            <option value='0'>全部</option>
		                            <option value='1'>主任</option>
		                            <option value='2'>老师</option>
		                            <option value='3'>学生</option>
		                            <option value='4'>实习</option>
		                        </select>
		                    </td>
		                    <td>
		                        <label for='orderSelect'>排列方式</label>
		                        <select id='orderSelect'>
		                            <option value='0'>身份</option>
		                            <option value='1'>年龄升</option>
		                            <option value='2'>年龄降</option>
		                        </select>
		                    </td>
		                  </tr>
		                </tbody>
	              	</table>
			</div>			
			)
	}
}