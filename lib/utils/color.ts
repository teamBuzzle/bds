/**
 * 색상 코드를 RGB 코드로 변환하는 함수
 * @param color 색상 코드
 * @returns RGB 코드
 */
export const getCodeToRgb = (color: string) =>
	`rgb(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)})`;
