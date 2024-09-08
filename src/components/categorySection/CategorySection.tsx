import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./categorySection.css";

const categories = [
  {
    id: 1,
    title: "Recién nacido",
    path: "/sesiones/recien-nacido/",
    image:
      "https://images.unsplash.com/photo-1616844017473-4a0408571ce4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Maternidad",
    path: "/sesiones/maternidad/",
    image:
      "https://images.unsplash.com/photo-1544620282-a141af6d3738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1hdGVybmlkYWR8ZW58MHwxfDB8fHwy",
  },
  {
    id: 3,
    title: "Familia",
    path: "/sesiones/familia/",
    image:
      "https://images.unsplash.com/photo-1557446772-0985ac892643?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "SmashCake",
    path: "/sesiones/smashcake/",
    image:
      "https://images.unsplash.com/photo-1675130023188-bbed24881d23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Bebes + 6 meses",
    path: "/sesiones/bebe-de-6-meses/",
    image:
      "https://images.unsplash.com/photo-1552788960-65fcafe071a5?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Comunion",
    path: "sesiones/comunion",
    image:
      "https://i.pinimg.com/564x/32/97/d7/3297d787ac3f89c4d467d9f0512641fb.jpg",
  },
];

export function CategorySection() {
  return (
    <div className="category-section">
      <Grid container spacing={1} className="category-section__grid">
        {categories.map((category) => (
          <Grid item xs={12} sm={4} key={category.path}>
            <Card className="category-section__card">
              <CardMedia
                className="category-section__media"
                component="img"
                image={category.image}
                alt={category.title}
                onClick={() =>
                  (window.location.href = `${category.path.toLowerCase()}`)
                }
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
