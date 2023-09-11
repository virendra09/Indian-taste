import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
  '[{"id": "0001","type": "fast-food","name": "Dosa","price": 50,"ingredients": {"protein": {"name": "Dosa","preparation": "Pan-fry"},  "salsa": {"name": "Coconut Chutney","spiciness": "Medium"},  "toppings": [{"name": "Potato Masala (Masala Dosa Topping)" },      {"name": "Paneer Bhurji (Paneer Dosa Topping)"},      {"name": "Onion-Tomato Topping"},      {"name": "Cheese and Vegetable Topping"}      ]    }  },{"id": "0002","type": "fast-food","name": "Samosa","price": 20,"ingredients": {"protein": {"name": "Samosa","preparation": "deep fry"},  "salsa": {"name": "Tamarind Chutney","spiciness": "Hot"},  "toppings": [{"name": "Potatoes (boiled and mashed)"},      {"name": "Peas (cooked)"},      {"name": "Spices (turmeric, cumin, garam masala, etc.)"},  {"name":"Dough(All-purpose flour)"}     ]    }  },{"id": "0003","type": "fast-food","name": "Paani-puri","price": 30,"ingredients": {"protein": {"name": "Paani-puri","preparation": "water bowl puri"},  "salsa": {"name": "pani","spiciness": "Mild"},  "toppings": [{"name": "Pani (Spiced Water)" },      {"name": "Puri(Semolina (sooji))"},      {"name": "Filling(Boiled and mashed spicy potatoes)"}      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});



app.post("/recipe", (req, res) => {
  switch(req.body.choice){
    case "Dosa":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "Samosa":
    data = JSON.parse(recipeJSON)[1];
    break;
    case "Paani-puri":
      data = JSON.parse(recipeJSON)[2];
      break;
      default:
        break;
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
