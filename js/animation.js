// �������� ������� body
const body = document.querySelector('body');

// ������ ������ ��� ����
const colors = ['#AEE1F8', '#FFBC8B']; // ������-����� � ������-���������

// ������ �������� �����
let currentColorIndex = 0;

// ������� ��� ����� ����
function changeBackgroundColor() {
  // ������ ���� ����
  body.style.backgroundColor = colors[currentColorIndex];

  // �������� ������ ����� ��� ���������� ��������
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// ��������� ����� ���� ������ 5 ������
setInterval(changeBackgroundColor, 5000);

// ������� ��� ��� ������ ��������
changeBackgroundColor();