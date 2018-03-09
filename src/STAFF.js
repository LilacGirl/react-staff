class staffItem{
	constructor(item){
		this.info = {};
		this.info.name = item.name;
		this.info.age = item.age || 0;
		this.info.sex = item.sex;
		this.info.id = item.id;
		this.info.descrip = item.descrip || '';
		this.key = ++staffItem.key;
	}
}

staffItem.key = 0;

export default class STAFF{
	constructor(){
		this.allStaff = [
			new staffItem(STAFF.rawData[0]),
			new staffItem(STAFF.rawData[1]),
			new staffItem(STAFF.rawData[2]),
			new staffItem(STAFF.rawData[3]),
			new staffItem(STAFF.rawData[4]),
			new staffItem(STAFF.rawData[5]),
			new staffItem(STAFF.rawData[6]),
			new staffItem(STAFF.rawData[7]),
			new staffItem(STAFF.rawData[8]),
			new staffItem(STAFF.rawData[9]),
			new staffItem(STAFF.rawData[10])
		];
		this.staff = this.allStaff;
	}
	//增
	addStaffItem(item) {
		let newItem = new staffItem(item);
		this.allStaff.push(newItem);
		this.staff = this.allStaff;
		return this
	}
	//搜
	searchStaff(word){
		this.word = word;
		this.staff = this.allStaff;

		this.staff = this.staff.filter(item => {
			return item.info.name.indexOf(word) != -1 ||
				   (item.info.age+'').indexOf(word) != -1 ||
				   item.info.id.indexOf(word) != -1 ||
				   item.info.sex.indexOf(word) != -1
		})

		return this;
	}
	//删
	removeStaffItem(key) {
		let newStaff = this.allStaff.filter(item => {
			return item.key != key
		})

		this.staff = newStaff;
		return this;
	}
	//打开
	openStaffDetail(key){
		let newStaff = this.allStaff.filter(item => {
				return item.key = key
		})

		this.staff = newStaff
		return this
	}
	//修改
	modifyStaff(item){
		this.allStaff.forEach(staffItem => {
			if(staffItem.key == item.key){
				staffItem.info.name = item.name;
				staffItem.info.sex = item.sex;
				staffItem.info.age = item.age;
				staffItem.info.id = item.id;
				staffItem.info.descrip = item.descrip;
			}
		})
		return this;
	}
	//筛选
	filterStaffDetail(keyword){
		switch(keyword){
			case '0':
				this.staff = this.allStaff;
				break;
			case '1':
				this.staff = this.allStaff.filter(item => {
					return item.info.id == '主任'
				});
				break;
			case '2':
				this.staff = this.allStaff.filter(item =>{
					return item.info.id == '老师'
				})
				break;
			case '3':
				this.staff = this.allStaff.filter(item => {
					return item.info.id=='学生'
				})
				break;
			default:
				this.staff = this.allStaff.filter(item =>{
					return item.info.id=='实习'
				})
				break;
		}
		/*let newStaff = this.allStaff.filter(item => {
			return item.info.id = keyword
		})
		//console.log(newStaff)
		this.staff = newStaff;*/
		return this;
	}

}

STAFF.rawData = [{ descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'},
                 { descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'},
                 { descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'},
                 { descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'},
                 { descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}];