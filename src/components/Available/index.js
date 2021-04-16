import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Availability of Neplease Food',
  },
  {
    title: 'Availability of Chinease food',
  },
  {
    title: 'Availability of Indian Food',
  }
];

const ListItem=()=>(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
         
        />
      </List.Item>
    )}
  />)
  export default ListItem;