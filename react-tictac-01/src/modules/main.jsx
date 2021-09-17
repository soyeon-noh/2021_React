const arrayEx = () => {
  // 연습용 함수
  // 방법 1
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  // 방법 2 (아래에 있는 다차원 배열)

  // 방법 3 (map이용은 2와 같음)
  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  // 방법 4 (map이용은 2와 같음)
  /**
   * const arrFuncBox = Array(3).fill(   [Array(3).fill(0)]   );
   * const arrFuncBox = [
   *    [
   *       [0, 0, 0],
   *       [0, 0, 0],
   *       [0, 0, 0],
   *    ]
   * ]
   */
  //   const arrayFuncBox = Array(3).fill([...Array(3).fill(0)]);
  const arrFuncBox = Array(3).fill([Array(3).fill(0)]);
};

/**
 * 다차원 배열
 * 배열 속에 요소가 배열로 이루어진 배열
 * a = [1,2,3,4,5]
 * console.log( a[0] )
 * a[0] = 3
 *
 * b = [
 * 	[1,2,3,4,5]
 * ]
 * console.log(b[0][1])
 * b[0][2] = 100
 *
 * c = [
 * 	[
 * 		[1,2,3,4,5]
 * 	]
 * ]
 * console.log(c[0][0][1])
 */

// const RenderSquare = (props) => {
// const { squares } = props;
const RenderSquare = ({ squares, changeSquares }) => {
  // props로 한꺼번에 받거나 {squares} 로 하나만 받는다
  // props로 받았을경우
  // const {squares} = props;로 추출해줘야한다.
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    const index = e.target.dataset.index;

    changeSquares(index);
  };

  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한 라인의 button 만들기
      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

/**
 * 0, 1, 2
 * 3, 4, 5
 * 6, 7, 8
 */

let i = 0;
const calcWinner = (squares) => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //   const winner = wins.map(win => calc(win));

  const winner = wins.filter((win) => {
    // console.table(win);
    if (
      squares[win[0]] &&
      squares[win[0]] === squares[win[1]] &&
      squares[win[0]] === squares[win[2]]
    ) {
      console.log("sq", squares[win[0]]);
      return true; // squares[win[0]];
    } else {
      return false;
    }
  });
  console.log(winner?.length && squares[winner[0][0]]);
  return winner.length && squares[winner[0][0]];
};

export { RenderSquare, calcWinner };
