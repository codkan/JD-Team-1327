import Matter from "matter-js";
import Player from "../components/renderers/Player";
import Wall from "../components/Wall";
import Constants from "../Constants";
import Npc from "../components/renderers/Npc";
import TV from "../components/renderers/TV";
import Table from "../components/renderers/Table";
import Couch from "../components/renderers/Couch";
import SideTable from "../components/renderers/SideTable";
import Stairs from "../components/renderers/Stairs"
import Plant from "../components/renderers/Plant"
import Bookshelf from "../components/renderers/Bookshelf"
import SofaChair from "../components/renderers/SofaChair"
import Lamp from "../components/renderers/Lamp"
import Fireplace from "../components/renderers/Fireplace"
import Rug from "../components/renderers/Rug"

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;

  let player = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 12,
    Constants.MAX_HEIGHT / 2,
    30,
    70
  );

  let npc = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 3 + 25,
    Constants.MAX_HEIGHT / 6,
    40,
    70,
    { isStatic: true }
  );

  let plant = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.6,
    Constants.MAX_HEIGHT / 3,
    70,
    70,
    { isStatic: true }
  );
  let stairs = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.5,
    Constants.MAX_HEIGHT / 4,
    90,
    170,
    { isStatic: true }
  );
  let fireplace = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.3,
    Constants.MAX_HEIGHT * 0.95,
    130,
    40,
    { isStatic: true }
  );
  // let desk = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH * 0.5,
  //   Constants.MAX_HEIGHT * 0.95,
  //   75,
  //   80,
  //   { isStatic: true }
  // );
  let chair = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH * 0.85),
    (y = Constants.MAX_HEIGHT / 2 + 40),
    (width = 30),
    (height = 30),
    { isStatic: true }
  );

  let rug = Matter.Bodies.circle(
    (x = Constants.MAX_WIDTH * 0.8),
    (y = Constants.MAX_HEIGHT * 0.3),
    (radius = 0),
    { isStatic: true }
  );

  let bookshelf = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH * 0.92),
    (y = Constants.MAX_HEIGHT * 0.35),
    (width = 30),
    (height = 60),
    { isStatic: true }
  );

  let lamp = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH * 0.92),
    (y = Constants.MAX_HEIGHT * 0.2),
    (width = 20),
    (height = 40),
    { isStatic: true }
  );
  let sideTable = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 4 ,
    Constants.MAX_HEIGHT / 7 + 30,
    15,
    10,
    { isStatic: true }
  );

  let couch = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 8,
    Constants.MAX_HEIGHT / 7,
    130,
    95,
    { isStatic: true }
  );

  let coffeeTable = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 8,
    Constants.MAX_HEIGHT / 3,
    100,
    35,
    { isStatic: true }
  );

  let tv = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 8,
    Constants.MAX_HEIGHT / 3 + 50,
    25,
    25,
    { isStatic: true }
  );
  

  let top_wall = Matter.Bodies.rectangle(
    (x = 0),
    (y = 0),
    (width = Constants.MAX_WIDTH * 2),
    (height = Constants.MAX_HEIGHT / 6),
    { isStatic: true }
  );
  let left_wall = Matter.Bodies.rectangle(
    (x = 0),
    (y = 0),
    (width = 10),
    (height = Constants.MAX_HEIGHT * 2),
    { isStatic: true }
  );
  let right_wall = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH),
    (y = 0),
    (width = 10),
    (height = Constants.MAX_HEIGHT * 2),
    { isStatic: true }
  );
  let bottom_wall = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH / 2),
    (y = Constants.MAX_HEIGHT),
    (width = Constants.MAX_WIDTH),
    (height = 10),
    { isStatic: true }
  );

  Matter.World.add(world, [
    player,
    top_wall,
    plant,
    stairs,
    fireplace,
    // desk,
    chair,
    rug,
    npc,
    bookshelf,
    lamp,
    sideTable,
    coffeeTable,
    tv,
    couch,
    left_wall,
    right_wall,
    bottom_wall,
  ]);

  return {
    physics: { engine: engine, world: world },

    npc: { 
      body: npc, 
      size: [90, 90], 
      //backgroundColor: "#E6D2BA", 
      renderer: Npc 
    },
    plant: {
      body: plant,
      size: [95, 95],
      color: "black",
      renderer: Plant,
    },
    stairs: {
      body: stairs,
      size: [150, 170],
      color: "black",
      renderer: Stairs,
    },
    fireplace: {
      body: fireplace,
      size: [130, 130],
      color: "black",
      renderer: Fireplace,
    },
    // desk: {
    //   body: desk,
    //   size: [75, 80],
    //   color: "black",
    //   renderer: Wall,
    // },



    lamp: {
      body: lamp,
      color: "black",
      size: [80, 80],
      renderer: Lamp,
    },
    sideTable: {
      body: sideTable,
      size: [45, 45],
      color: "black",
      renderer: SideTable,
    },

    coffeeTable: {
      body: coffeeTable,
      size: [120, 120],
      color: "black",
      renderer: Table,
    },

    couch: {
      body: couch,
      size: [130, 130],
      color: "black",
      renderer: Couch, 
    },
    rug: {
      body: rug,
      color: "black",
      radius: 75,
      renderer: Rug,
    },
    bookshelf: {
      body: bookshelf,
      color: "black",
      size: [100, 100],
      renderer: Bookshelf,
    },
    chair: {
      body: chair,
      size: [100, 100],
      color: "black",
      renderer: SofaChair,
    },
    player: { 
      body: player, 
      size: [90, 90], 
      //backgroundColor: "#E6D2BA", 
      renderer: Player 
    },
    tv: {
      body: tv,
      size: [70, 70],
      color: "black",
      renderer: TV,
    },
    top_wall: {
      body: top_wall,
      size: [Constants.MAX_WIDTH * 2, Constants.MAX_HEIGHT / 6],
      color: "black",
      renderer: Wall,
    },
    left_wall: {
      body: left_wall,
      size: [10, Constants.MAX_HEIGHT * 2],
      color: "black",
      renderer: Wall,
    },
    right_wall: {
      body: right_wall,
      size: [10, Constants.MAX_HEIGHT * 2],
      color: "black",
      renderer: Wall,
    },
    bottom_wall: {
      body: bottom_wall,
      size: [Constants.MAX_WIDTH, 10],
      color: "black",
      renderer: Wall,
    },
  };
};
export default Entities;