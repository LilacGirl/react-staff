import React from 'react';
import ReactDOM from 'react-dom';

export default class StaffDetail extends React.Component{
	handleEdit(){
		let item = {}
		let editTable = ReactDOM.findDOMNode(this.refs.editTable);
		let sex = editTable.querySelector('#staffEditSex');
		let id = editTable.querySelector('#staffEditId');

		item.name = editTable.querySelector('#staffEditName').value.trim();
		item.age = editTable.querySelector('#staffEditAge').value.trim();
		item.descrip = editTable.querySelector('#staffEditDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;
		item.key = this.props.staffDetail.key;

		//表单验证
		if(item.name == '' || item.age == '' || item.descrip == ''){
			let tips = ReactDOM.findDOMNode(this.refs.DtipsUnDone)
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none'
			},1000)
			return;
		}
		//非负整数
		let numReg = /^\d+$/;
		if(!numReg.test(item.age) || parseInt(item.age)>150){
			let tips = React.findDOMNode(this.refs.DtipsUnAge);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}

		this.props.modifyStaff(item)
		//此处应在返回修改成功信息后确认
		let tips = ReactDOM.findDOMNode(this.refs.Dtips);
		tips.style.display = 'block';
		setTimeout(function(){
            tips.style.display = 'none';
		}, 1000);		

	}
	closeStaffDetail(){
		this.props.closeStaffDetail()
	}
	render() {
		let staffDetail = this.props.staffDetail;
		if(!staffDetail){
			return null;
		}

		return(
	          <div className="overLay">
	            <h4 style={{'textAlign':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
	            <hr/>
	            <table ref="editTable">
	              <tbody>
	                <tr>
	                  <th>姓名</th>
	                  <td><input id='staffEditName' type="text" defaultValue={staffDetail.info.name}></input></td>
	                </tr>
	                <tr>
	                  <th>年龄</th>
	                  <td><input id='staffEditAge' type="text" defaultValue={staffDetail.info.age}></input></td>
	                </tr>
	                <tr>
	                  <th>性别</th>
	                  <td>
	                    <select ref='selSex' id='staffEditSex'>
	                      <option value="男">男</option>
	                      <option value="女">女</option>
	                    </select>
	                  </td>
	                </tr>
	                <tr>
	                  <th>身份</th>
	                  <td>
	                    <select ref="selId" id='staffEditId'>
	                      <option value="主任">主任</option>
	                      <option value="老师">老师</option>
	                      <option value="学生">学生</option>
	                      <option value="实习">实习</option>
	                    </select>
	                  </td>
	                </tr>
	                <tr>
	                  <th>个人描述</th>
	                  <td><textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}></textarea></td>
	                </tr>
	              </tbody>
	            </table>
	            <p ref='Dtips' className='tips'>修改成功</p>
	            <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
	            <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
	            <button onClick={this.handleEdit.bind(this)}>完成</button>
	            <button onClick = {this.closeStaffDetail.bind(this)}>关闭</button>
	          </div>				
			)
	}
}