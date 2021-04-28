var tela = 0;
var largura = 200;
var altura = 45;
var xMenu = 150;
var yMenu1 = 240;
var yMenu2 = 300;
var yMenu3 = 360;
var largura1 = 65;
var altura1 = 30;
var xVoltar = 30;
var yVoltar = 30;

var nivel = 1
var escolhaFase = 0;

let myFont;
let myFont1;
let bg;

function setup() {
  createCanvas(500, 500);
  bg = loadImage('Quadro.png');
}

function preload(){
  myFont = loadFont('Chalkaholic DEMO.otf');
  myFont1 = loadFont('SimplyChalky.ttf');
}

function draw() {
  textStyle(BOLD);
  //Tela de Menu
  if (tela == 0){
    background(bg);
    textFont(myFont)

    // Menu com três Opções
    // Iniciar o Jogo 
    textAlign(CENTER);
    textSize(50);
    fill(255);
    text("Operando Números", 125, 120, 250);
    textSize(26);
    if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu1, largura, altura, 15);
    if (mouseIsPressed){ 
        tela = 1
      }
    }
    fill(255);
    noStroke();
    text("Iniciar", 250, 270);
    
    // Instruções do Jogo
  if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu2, largura, altura, 15);
      if (mouseIsPressed){ 
        tela = 2
      }
    }
    fill(255);
    noStroke();
    text("Instruções", 250, 330)
    
    // Créditos do Jogo
  if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu3, largura, altura, 15);
    if (mouseIsPressed){ 
        tela = 3
      }
    }
    fill(255);
    noStroke();
    text("Créditos", 250, 390)
    
  }
  //Tela do Jogo
  if (tela == 1){
    if (nivel == 1){
      fase1();
    }
    if (nivel == 2){
      fase2();
    }
    if (nivel == 3){
      fase3();
    }
    if (nivel == 4){
      fase4();
    }
    if (nivel == 5){
      fase5();
    }
  }
  //Tela de Instruções
  if (tela == 2){
    background(bg);
    textFont(myFont)
    textSize(40);
    fill(255);
    text("Instruções", 250, 100);
    textSize(16);
    text("Use o mouse para selecionar uma das opções.", 40, 170, 400)
    text("O objetivo do jogo é associar o número ao resultado da operação.", 40, 210, 400)
    text("Clique em voltar para ir ao menu.", 40, 260, 400)
    textSize(12)
    fill(255, 0, 0)
    textFont('Arial')
    text("Este jogo é baseado nas habilidades EF03MA03, EF03MA05 e EF03MA08 da BNCC. Estas habilidades tratam da resolução de problemas envolvendo Adição, Subtração, Multiplicação e Divisão.", 40, 400, 410)
    if (mouseX > xVoltar && mouseX <xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1 ){
      stroke(200);
      fill(74, 121, 89);
      rect(xVoltar, yVoltar, largura1, altura1, 15);
    if (mouseIsPressed){ 
        tela = 0
      }
  }
    fill(255);
    textFont(myFont)
    noStroke();
    textSize(13)
    text("VOLTAR", 60, 50)
}
  //Tela de Créditos
  if ( tela == 3){
    background(bg);
    textSize(40);
    fill(255);
    text("Créditos", 250,100);
    textSize(20);
    text("VINICIUS SILVA", 250,170);
    text("THIAGO FARIAS", 250,300);
    textSize(16);
    text("Função: Educador", 250,190);
    text("Função: Programador", 250,320);
    textSize(14);
    fill(240);
    text("Estudante de Licenciatura em Pedagogia na Universidade Federal do Rio Grande do Norte.", 40,210, 400);
    text("Estudante do Bacharelado em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte.", 40,340, 400);
  if (mouseX > xVoltar && mouseX <xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1 ){
      stroke(200);
      fill(74, 121, 89);
      rect(xVoltar, yVoltar, largura1, altura1, 15);
    if (mouseIsPressed){ 
        tela = 0
      }
  }
    fill(255);
    noStroke();
    textSize(13)
    text("VOLTAR", 60, 50)
}
  //Tela Game Over
  if (tela == 4) {
    acabouJogo()
  }
  //Tela Vencedor
  if (tela == 5) {
    venceuJogo()
  }
}

function mouseClicked(){
  if (tela == 1 && nivel == 1) {
    if (escolhaFase == 1 || escolhaFase == 2) {
      tela = 4;
    }
    if (escolhaFase == 3) {
      nivel = 2; 
    } 
  }
  else if (tela == 1 && nivel == 2) {
    if (escolhaFase == 2 || escolhaFase == 3) {
      tela = 4;
    }
    if (escolhaFase == 1) {
      nivel = 3; 
    } 
  }
  else if (tela == 1 && nivel == 3) {
    if (escolhaFase == 1 || escolhaFase == 3) {
      tela = 4;
    }
    if (escolhaFase == 2) {
      nivel = 4; 
    } 
  }
  else if (tela == 1 && nivel == 4) {
    if (escolhaFase == 2 || escolhaFase == 3) {
      tela = 4;
    }
    if (escolhaFase == 1) {
      nivel = 5; 
    } 
  }
  else if (tela == 1 && nivel == 5) {
    if (escolhaFase == 1 || escolhaFase == 2) {
      tela = 4;
    }
    if (escolhaFase == 3) {
      tela = 5; 
    } 
  }
}

function opcaoBotao(xMin, xMax, yMin, yMax, Largura, Altura, opcao){
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
      stroke(200);
      fill(74, 121, 89);
      rect(xMin, yMin, Largura, Altura, 15);
      escolhaFase = opcao;
  }
    fill(255);
    noStroke();
}

function acabouJogo() {
  background(bg);
    textFont(myFont)
    textSize(40);
    fill(255);
    text("Game Over!", 0, 250, 500);
}

function venceuJogo() {
  background(bg);
    textFont(myFont)
    textSize(40);
    fill(255);
    text("Você venceu!", 0, 250, 500);
}

function fase1(){
    background(bg);
    textFont(myFont)
    textSize(28);
    fill(255);
    text("Qual o resultado da operação:", 0, 100, 500);
    textFont(myFont1)
    textSize(80);
    fill(255);
    text("2 + 2", 15, 250, 500);
  
    escolhaFase = 0
      
    opcaoBotao(90,160,335,400,75,75,1)
    opcaoBotao(210,280,335,400,75,75,2)
    opcaoBotao(330,400,335,400,75,75,3)
    text("3   6   4", 15, 400, 500);
}

function fase2(){
    background(bg);
    textFont(myFont)
    textSize(28);
    fill(255);
    text("Qual o resultado da operação:", 0, 100, 500);
    textFont(myFont1)
    textSize(80);
    fill(255);
    text("9 - 4", 15, 250, 500);
  
    escolhaFase = 0
      
    opcaoBotao(90,160,335,400,75,75,1)
    opcaoBotao(210,280,335,400,75,75,2)
    opcaoBotao(330,400,335,400,75,75,3)
    text("5   2   7", 15, 400, 500);
}

function fase3(){
    background(bg);
    textFont(myFont)
    textSize(28);
    fill(255);
    text("Qual o resultado da operação:", 0, 100, 500);
    textFont(myFont1)
    textSize(80);
    fill(255);
    text("8 / 4", 15, 250, 500);
  
    escolhaFase = 0
      
    opcaoBotao(95,165,335,400,75,75,1)
    opcaoBotao(205,275,335,400,75,75,2)
    opcaoBotao(325,395,335,400,75,75,3)
    text("1   2   4", 15, 400, 500);
}

function fase4(){
    background(bg);
    textFont(myFont)
    textSize(28);
    fill(255);
    text("Qual o resultado da operação:", 0, 100, 500);
    textFont(myFont1)
    textSize(80);
    fill(255);
    text("2 x 4", 15, 250, 500);
  
    escolhaFase = 0
      
    opcaoBotao(90,160,335,400,75,75,1)
    opcaoBotao(210,280,335,400,75,75,2)
    opcaoBotao(330,400,335,400,75,75,3)
    text("8   9   3", 15, 400, 500);
}

function fase5(){
    background(bg);
    textFont(myFont)
    textSize(28);
    fill(255);
    text("Qual o resultado da operação:", 0, 100, 500);
    textFont(myFont1)
    textSize(80);
    fill(255);
    text("4 + 5 - 2 ", 15, 250, 500);
  
    escolhaFase = 0
      
    opcaoBotao(90,160,335,400,75,75,1)
    opcaoBotao(210,280,335,400,75,75,2)
    opcaoBotao(330,400,335,400,75,75,3)
    text("9   5   7", 15, 400, 500);
}