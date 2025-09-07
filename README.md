# Cat & Mouse Hunter

A procedural 3D browser game where you play as a cat contracted to clear mice from randomly generated houses.
Built with **Three.js** and **cannon-es**, bundled with **Vite**.

## Features

- Procedurally generated house floor plans with walls, doors, furniture, and clutter
- Small fenced-in backyard to roam
- Physics-enabled clutter that can be knocked over
- Third-person cat controller: walk, run (Shift), jump (Space)
- Mice AI that flees when you get close; each level adds more/faster mice and more clutter
- Level progression when you catch the required number of mice

## Controls

- **WASD** move
- **Shift** run
- **Ctrl** sneak
- **Space** jump
- **E** pounce lock-on to a nearby mouse in front of you
- **Mouse** orbit camera
- **Mouse wheel** zoom
- **R** restart level
- **N** next level (after you clear the current house)

### Controller (Gamepad)

- **Left stick** move
- **Right stick** camera look
- **D‑pad Up/Down** zoom
- **A** jump and accept/advance prompts
- **RT/RB** run
- **LT/LB** sneak
- **X or B** pounce lock‑on
- **Back/Select** restart level
- **Start** next level (after you clear the current house)

## Run locally

- Requires Node 18+
- Install dependencies and start:
  ```bash
  npm install
  npm start
  ```
- Browser will open automatically. If not, visit http://localhost:5173

## Build (for publishing to GitHub Pages)

```bash
npm run build
```
