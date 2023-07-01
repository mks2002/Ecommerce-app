import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography } from "@mui/material";
import ActionItem from "./ActionItem";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Box>
      {product && Object.keys(product).length && (
        <Box>
          <Box>
            <ActionItem product={product} />
          </Box>
          <Box>
            <Typography>{product.title.longTitle}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;