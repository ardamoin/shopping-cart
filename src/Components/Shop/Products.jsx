import Page from "../UI/Page";
import Product from "./Product";
import pillow from "../../Assets/pillow.jpg";
import tapestry from "../../Assets/tapestry.jpg";
import mug from "../../Assets/mug.jpg";
import cutout from "../../Assets/cutout.jpg";

const Products = () => {
  return (
    <Page className="items-start justify-center overflow-hidden">
      <table cellPadding="20px">
        <tr> 
          <th>
            <Product
              productImg={mug}
              productName="Hasbulla Mug"
              productPrice={12.45}
            />
          </th>
          <th>
            <Product
              productImg={pillow}
              productName="Hasbulla Pillow"
              productPrice={23.99}
            />
          </th>
          <th>
            <Product
              productImg={tapestry}
              productName="Hasbulla Tapestry"
              productPrice={19.45}
            />
          </th>
          <th>
            <Product
              productImg={cutout}
              productName="Hasbulla Cutout"
              productPrice={7.55}
            />
          </th>
        </tr>
      </table>
    </Page>
  );
};

export default Products;
