const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
const w = 500; // 全体の幅
const h = 500; // 全体の高さ
const margin = 50; // 余白の大きさ
const L = (w - 2 * margin); // ゲームの一つの辺の長さ
const l = L/3; // マスの長さ

ctx.fillStyle = 'rgb(0, 123, 173)';
ctx.fillRect(0, 0, w, h);

// パス(線)を書きはじめる
ctx.beginPath();
// 一本目
ctx.moveTo(margin + l, margin);
ctx.lineTo(margin + l, h - margin);
// 二本目
ctx.moveTo(margin + l * 2, margin);
ctx.lineTo(margin + l * 2, h - margin);
// 実際に線を描画する
ctx.stroke();