/**
 * Created by hafzal on 5/31/14.
 */

(function ()
{

    var w = window;
    w.Sudoko = w.Sudoko || {};

    w.Sudoko.GameModel = function (givenModel)
    {
        var _this = this,
            givenBoard,
            i = 0;

        _this.board;
        _this.preFilled = 0;
        _this.userFilled = 0;

        if (givenModel)
        {
            givenBoard = giveModel.board;
            _this.preFilled = giveModel.preFilled;

            if (givenBoard.length !== 9)
            {
                throw "board should be of size 9x9"
            }

            for (; i < 9; i++)
            {
                if (givenBoard[i].length !== 9)
                {
                    throw "board should be of size 9x9"
                }
            }

            // Given board looks good we can use it
            _this.board = givenBoard;
        }

        else
        {
            // if the user doesn't give us a board, we use a default one
            _this.board = new Array(9);

            for (; i < 9; i++)
            {
                _this.board[i] = new Array(9);
            }

            // Populate with sample values from the example board on wiki
            _this.board[0][0] = 5;
            _this.board[0][1] = 3;
            _this.board[0][4] = 7;

            _this.board[1][0] = 6;
            _this.board[1][3] = 1;
            _this.board[1][4] = 9;
            _this.board[1][5] = 5;

            _this.board[2][1] = 9;
            _this.board[2][2] = 8;
            _this.board[2][7] = 6;

            _this.board[3][0] = 8;
            _this.board[3][4] = 6;
            _this.board[3][8] = 3;

            _this.board[4][0] = 4;
            _this.board[4][3] = 8;
            _this.board[4][5] = 3;
            _this.board[4][8] = 1;

            _this.board[5][0] = 7;
            _this.board[5][4] = 2;
            _this.board[5][8] = 6;

            _this.board[6][1] = 6;
            _this.board[6][6] = 2;
            _this.board[6][7] = 8;

            _this.board[7][3] = 4;
            _this.board[7][4] = 1;
            _this.board[7][5] = 9;
            _this.board[7][8] = 5;

            _this.board[8][4] = 8;
            _this.board[8][7] = 7;
            _this.board[8][8] = 9;

            _this.preFilled = 30;
        }
    }
})()