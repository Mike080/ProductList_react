import { Card } from "antd"
const Product = ({title, text, img}) => {
  return (
    <Card>
      <img src={`http://smktesting.herokuapp.com/static/${img}`} />
      <h2>{title}</h2>
      <p>{text}</p>
    </Card>
  )
}
  


export default Product