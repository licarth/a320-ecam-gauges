'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Gauge {\n  position: relative;\n  height: 2cm;\n  width: 2cm;\n  color: white;\n  font-variant: bold;\n}\n\n.circle {\n  position: absolute;\n  width: 100%;\n}\n\n.gaugeContainer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n";
styleInject(css);

var circle = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICBoZWlnaHQ9IjIwbW0iCiAgIHdpZHRoPSIyMG1tIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8bWFya2VyCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlkPSJFbXB0eURpYW1vbmRMZW5kIgogICAgICAgcmVmWD0iMCIKICAgICAgIHJlZlk9IjAiCiAgICAgICBvcmllbnQ9ImF1dG8iPgogICAgICA8cGF0aAogICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjgsMCwwLDAuOCwtNS42LDApIgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAwLC03LjA3MTA3NjggLTcuMDcxMDg5NCwwIDAsNy4wNzEwNTg5IDcuMDcxMDQ2MiwwIFoiCiAgICAgICAgIGlkPSJwYXRoNTAzNyIgLz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI3NykiCiAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIgogICAgIGlkPSJsYXllcjIiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoNTE5NyIKICAgICAgIGQ9Im0gMTMuNDczOTA2LDI3OS40OTgzMSAwLjkzMjY1NiwwLjQ2OTY0IC0wLjU4MjA4MywxLjIzNjkyIC0wLjg5OTU4MywtMC41Njg4NSB6IgogICAgICAgc3R5bGU9ImZpbGw6I2RmY2U0ZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4wNTI5MTY2NnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg0ODQzIgogICAgICAgZD0ibSA0Ljk1MzE3MjQsMjkzLjE1MTE1IGMgLTEuMzg2MTc1LC0xLjUyOTcgLTIuMjQ2MDExNiwtMy4xNzAzIC0yLjE4MTk5MDQsLTUuNzM1MDcgMC4wNzI1NjYsLTIuOTA3MDggMi43MTk4NzA0LC03LjI4MTYzIDcuMzAzNTQzLC03LjMwMDMzIDMuNzc5MTkxLC0xMGUtNiA1LjY0MDcyMywyLjc0MDg0IDUuOTc3NDgyLDMuMzAyMTEiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MDtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC42MDAwMDAwMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoNTE5NSIKICAgICAgIGQ9Im0gMTUuNzk0OTYxLDI4My42MDAyNyAwLjU1NjU4OCwxLjMwOTYyIGMgMCwwIC0wLjIyOTE4MywwLjMyMjczIC0wLjE0NDk5MywwLjQ3NzA4IDAuMDg0MTksMC4xNTQzNSAwLjEwNzU3NiwwLjI5OTM0IDAuNTI4NTI1LDAuMDg4OSAwLjQyMDk1LC0wLjIxMDQ4IDAuNTQ3MjM0LC0wLjI3MTI4IDAuMzMyMDgzLC0wLjc2NzA3IC0wLjIxNTE1MiwtMC40OTU3OCAtMC40NzIzOTksLTEuMDk5MTQgLTAuNDcyMzk5LC0xLjA5OTE0IGwgLTAuMjY2NjAyLC0wLjMwODcgeiIKICAgICAgIHN0eWxlPSJmaWxsOiNlMDBmMzI7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMDUyOTE2NjZweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==";

var Gauge = function Gauge(props) {
  var bigDigits = Math.floor(props.value);
  var smallDigit = Math.round((props.value - bigDigits) * 10);

  var lightGreen = "#34c957";

  var angle = Math.max(0, Math.min(props.value * 161 / 100, 207));

  return React.createElement(
    'div',
    { className: 'Gauge' },
    React.createElement(
      'div',
      { className: 'gaugeContainer' },
      React.createElement('img', { className: 'circle', src: circle }),
      React.createElement(
        'svg',
        { viewBox: '0 0 1 1', preserveAspectRatio: 'none' },
        React.createElement('rect', { x: 0.4, y: 0.62, width: 0.5, height: 0.2, stroke: 'white', 'stroke-width': '0.02', fill: 'none' }),
        React.createElement(
          'text',
          { x: 0.25, y: 0.45,
            'font-weight': 'bold',
            'font-family': 'a320',
            'stroke-width': '0.1',
            'font-size': '0.13',
            fill: 'white' },
          '5'
        ),
        React.createElement(
          'text',
          { x: 0.58, y: 0.38,
            'font-weight': 'bold',
            'font-family': 'a320',
            'stroke-width': '0.1',
            'font-size': '0.13',
            fill: 'white' },
          '10'
        ),
        React.createElement(
          'text',
          { x: 0.72, y: 0.79,
            'font-weight': 'bold',
            'text-anchor': 'end',
            'font-family': 'a320',
            'stroke-width': '0.1',
            'font-size': '0.15',
            fill: lightGreen },
          bigDigits
        ),
        React.createElement(
          'text',
          { x: 0.78, y: 0.79,
            'font-weight': 'bold',
            'font-family': 'a320',
            'stroke-width': '0.1',
            'font-size': '0.13',
            fill: lightGreen },
          smallDigit
        ),
        React.createElement('circle', { cx: 0.75, cy: 0.77, r: 0.01, stroke: 'white', 'stroke-width': '0', fill: lightGreen }),
        React.createElement('polyline', {
          points: '0.5,0.5 0.18,0.79',
          'stroke-linecap': 'round',
          'stroke-alignment': 'center',
          'stroke-width': '0.03',
          stroke: lightGreen,
          transform: 'rotate(' + angle + ', 0.5, 0.5)'
        })
      )
    )
  );
};

module.exports = Gauge;
