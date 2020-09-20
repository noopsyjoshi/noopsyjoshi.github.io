/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */

const Draw = ($el) => {

  const duration = 5;

  let global_r = 255;
  let global_g = 255;
  let global_b = 255;

  let segment_counter = 0;

  let bg_color = 'rgba(' + global_r + ',' + global_g + ',' + global_b + ', 0.05)';

  const testbody = document.querySelector('body');
  const c = document.querySelector('#mousetrail');
  const ctx = c.getContext('2d');
  const colors = [
    // original
    // { r: 104, g: 0, b: 183 },
    { r: 2, g: 167, b: 186 },
    { r: 7, g: 112, b: 252 },
    { r: 238, g: 58, b: 51 },
  ];
  let cIndex = 0;
  const maxColors = colors.length;
  let total = 0;
  const segment = 15000;
  // number of strokes before bg changes
  // const segment = 20000;
  const isDown = true;
  let px;
  let py;

  setSize();

  testbody.onmousemove = testbody.ontouchmove = function(e) {
    plot(e);
  };

  function getPos(e) {
    if (e.touches) e = e.touches[0];
    const r = c.getBoundingClientRect();
    return {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
    };
  }

  function plot(e) {
    // when segment increases by 1, plot function is fired again
    const pos = getPos(e);
    plotLine(ctx, px, py, pos.x, pos.y);
    px = pos.x;
    py = pos.y;
  }

  function plotLine(ctx, x1, y1, x2, y2) {
    ctx.fillStyle = bg_color;

    ctx.fillRect(0, 0, c.width, c.height);

    const diffX = Math.abs(x2 - x1);
    const diffY = Math.abs(y2 - y1);
    const dist = Math.sqrt(diffX * diffX + diffY * diffY);
    const step = dist / 50;
    let i = 0;
    let t;
    // let b;
    let x;
    let y;

    while (i < dist) {
      // t = Math.min(1, i / dist );
      t = Math.min(1, i / dist );

      x = x1 + (x2 - x1) * t;
      y = y1 + (y2 - y1) * t;

      ctx.fillStyle = getColor();
      ctx.beginPath();
      // Radius of the cursor cirlce
      ctx.arc(x, y, 100, 0, Math.PI * 2);

      ctx.fill();
      i += step;
    }

    function getColor() {
      let r;
      let g;
      let b;
      let a;
      let t;
      let c1;
      let c2;

      c1 = colors[cIndex];
      // c2 = colors[(cIndex + 1) % maxColors];
      c2 = colors[(cIndex + 1) % maxColors];
      t = Math.min(1, total / segment);

      if (++total > segment) {
        total = 0;
        segment_counter++;
        // bg_color = 'rgba(' + global_r + ',' + global_g + ',' + global_b + ',0.05)';

        if (++cIndex >= maxColors) cIndex = 0;
      }

      global_r = c1.r + (c2.r - c1.r) * t;
      global_g = c1.g + (c2.g - c1.g) * t;
      global_b = c1.b + (c2.b - c1.b) * t;

      r = c1.r + (c2.r - c1.r) * t;
      g = c1.g + (c2.g - c1.g) * t;
      b = c1.b + (c2.b - c1.b) * t;


      // global_r = c1.r + (c2.r - c1.r);
      // global_g = c1.g + (c2.g - c1.g);
      // global_b = c1.b + (c2.b - c1.b);

      // r = c1.r + (c2.r - c1.r);
      // g = c1.g + (c2.g - c1.g);
      // b = c1.b + (c2.b - c1.b);

      return 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';
    }
  }

  window.onresize = setSize;
  function setSize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
};

export default Draw;
