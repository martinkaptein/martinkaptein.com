/**
 * Created by hafzal on 5/31/14.
 */
(function ()
{
    var w = window;
    w.Sudoko = w.Sudoko || {};
    var Sudoko = w.Sudoko

    w.Sudoko.app = (function ()
    {
        var _app = {},
            model,
            numRegex = /^\d+$/,
            totalEntries = 81,
            gameTbl,
            infoMsg,
            errorMsg,
            successMsg;

        function VerifySubBlock(model, startX,startY)
        {
            var used = [],
                i = 0,
                j = 0,
                k = 0;

            for (i = startX; i < startX + 3; i++)
            {
                for (j = startY; j < startY + 3; j++)
                {
                    used[model[i][j] - 1] = true;
                    k++;
                }
            }

            // Verify we saw all the integers
            for (i = 0; i < 9; i++)
            {
                if (!used[i])
                {
                    return false;
                }
            }

            return true;
        }

        function VerifyPuzzle(model)
        {
            var used,
                i = 0,
                j = 0;

            // Check each of the 9 rows
            for (i = 0; i < 9; i++)
            {
                used = new Array(9)
                for (j = 0; j < 9; j++)
                {
                    if (!numRegex.test(model[i][j]) || model[i][j] === 0)
                    {
                        return false;
                    }

                    used[model[i][j] - 1] = true;
                }

                // Make sure the row had each integer only once
                for (j = 0; j < 9; j++)
                {
                    if (!used[j])
                    {
                        return false;
                    }
                }

                used.length = 0
            }

            // Check each of the 9 cols
            for (i = 0; i < 9; i++)
            {
                used = new Array(9)
                for (j = 0; j < 9; j++)
                {
                    if (!numRegex.test(model[j][i]) || model[j][i] === 0)
                    {
                        return false;
                    }

                    used[model[j][i] - 1] = true;
                }

                // Make sure the row had each integer only once
                for (j = 0; j < 9; j++)
                {
                    if (!used[j])
                    {
                        return false;
                    }
                }

                used.length = 0
            }

            // Check each of the nine blocks have the integers
            return VerifySubBlock(model, 0, 0) &&
                VerifySubBlock(model, 0, 3) &&
                VerifySubBlock(model, 0, 6) &&
                VerifySubBlock(model, 3, 0) &&
                VerifySubBlock(model, 3, 3) &&
                VerifySubBlock(model, 3, 6) &&
                VerifySubBlock(model, 6, 0) &&
                VerifySubBlock(model, 6, 3) &&
                VerifySubBlock(model, 6, 6);
        };

        _app.StartUp = function ()
        {
            // Sets up the app.
            gameTbl = $(".game-board");
            infoMsg = $(".info-msg");
            errorMsg = $(".error-msg");
            successMsg = $(".success-msg");

            var i = 0,
                j = 0,
                newRow,
                newCol,
                board,
                gameBoard = gameTbl.children("tbody");


            model = new Sudoko.GameModel();

            // Cache the board
            board = model.board;

            // Insert the input elements in the dom
            for (i = 0; i < 9; i++)
            {
                newRow = $('<tr>', {'id': i});

                for (j = 0; j < 9; j++)
                {
                    if (board[i][j])
                    {
                        newCol = $("<td>" + board[i][j] + "</td>", {readOnly: true});
                    }
                    else
                    {
                        newCol = $("<td>");
                        newCol.append($("<input>", {maxLength: 1, id: (i + "_" + j)}));
                    }
                    newRow.append(newCol);
                }

                // insert the row into the game board
                gameBoard.append(newRow);
            }

            // Bind user input event to the input elements
            gameBoard.find("input").on('change', InputChanged);
        };

        InputChanged = function (event, b)
        {
            var elt = $(event.target),
                val = elt.val(),
                i,
                j,
                id = event.target.id;

            // Check the user input

            if (!numRegex.test(val) && val !== "" || val == 0)
            {
                elt.addClass('invalid-input');
            }
            else
            {
                elt.removeClass('invalid-input');
                id = id.split('_');
                i = id[0];
                j = id[1];

                if (!model.board[i][j])
                {
                    model.userFilled++;
                }
                model.board[i][j] = val;

                if (!val)
                {
                    model.userFilled--;
                }
            }

            if (model.userFilled + model.preFilled === totalEntries)
            {
                // Remove info msg
                infoMsg.addClass("no-show");

                // Run Verification
                if (VerifyPuzzle(model.board))
                {
                    gameTbl.addClass('solve-success');
                    errorMsg.addClass("no-show");
                    successMsg.removeClass("no-show");
                }
                else
                {
                    gameTbl.addClass('solve-fail');
                    errorMsg.removeClass("no-show");
                    successMsg.addClass("no-show");
                }
            }
            else
            {
                gameTbl.removeClass('solve-success');
                gameTbl.removeClass('solve-fail');
            }
        };

        return _app;
    })();
}())