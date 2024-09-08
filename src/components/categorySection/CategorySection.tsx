import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./categorySection.css";
import { Link } from "react-router-dom";
import { CategoryImageSection } from "../../apis/ImagesCategorySection";

export function CategorySection() {
  return (
    <div className="category-section">
      <Grid container spacing={1} className="category-section__grid">
        {CategoryImageSection.map((category) => (
          <Grid item xs={12} sm={4} key={category.path}>
            <Link to={category.path.toLowerCase()}>
              <Card className="category-section__card">
                <CardMedia
                  className="category-section__media"
                  component="img"
                  image={category.image}
                  alt={category.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" className="category-section__title">
                    {category.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
