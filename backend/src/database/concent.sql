DROP SCHEMA IF EXISTS Concent;
CREATE SCHEMA IF NOT EXISTS Concent;

CREATE TABLE Concent.Dishes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,
  photo TEXT,
  finish_in INTEGER NOT NULL,
  active BOOLEAN
);

CREATE TABLE Concent.Customer (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  cpf TEXT NOT NULL,
  number_table TEXT NOT NULL
);

CREATE TABLE Concent.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  customer_id INTEGER,
  status TEXT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Concent.Customer (id)
);

CREATE TABLE Concent.OrderDishes (
  order_id INTEGER,
  dish_id INTEGER,
  quantity INTEGER NOT NULL,
  CONSTRAINT PRIMARY KEY(order_id, dish_id),
    FOREIGN KEY (order_id) REFERENCES Concent.Orders (id),
    FOREIGN KEY (dish_id) REFERENCES Concent.Dishes (id)
);

INSERT INTO
  Concent.Dishes (title, category, price, photo, finish_in, active)
  VALUES
  ("Poke", "Pratos Frios", 39.00, "https://www.casalcozinha.com.br/wp-content/uploads/2020/09/shimeji-na-manteiga-2-1300x825.jpg", 15, true),
  ("Ceasar Salad", "Pratos Frios", 25.00, "https://img.itdg.com.br/images/recipes/000/162/212/363592/363592_original.jpg", 10, true),
  ("Steak", "Pratos Quentes", 35.00, "https://www.tastingtable.com/img/gallery/15-ingredients-that-will-seriously-elevate-your-steak/l-intro-1663169111.jpg", 20, true),
  ("Cuba Libre", "Bebidas", 20.00, "https://vinepair.com/wp-content/uploads/2021/06/cubalibre_card.jpg", 7, true);

INSERT INTO
  Concent.Customer (name, cpf, number_table)
  VALUES
  ("Joana", "555.555.555-55", "1"),
  ("Mario", "222.222.222-22", "2"),
  ("Ana", "777.777.777-77", "3");
