class TicTacToe {
	constructor() {
		this._turn = 0;
		this._field = [
			[null, null, null], 
			[null, null, null], 
			[null, null, null]
		];
	}

	getCurrentPlayerSymbol() {
		if (this._turn % 2 == 0) {
			return 'x';
		} else {
			return 'o';
		}
	}

	nextTurn(rowIndex, columnIndex) {
		if (this._field[rowIndex][columnIndex] != null) {
			return this._field[rowIndex][columnIndex];
		}

		this._field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
		this._turn++;
	}

	_get_match_status() {
		// Check cols
		for(let j = 0; j < 3; j++) {
			for(let i = 0; i < 3; i++) {
				if(this._field[i][j] != 'x')
					break;
				if(i == 2)
					return 'x';
			}
		}

		for(let j = 0; j < 3; j++) {
			for(let i = 0; i < 3; i++) {
				if(this._field[i][j] != 'o')
					break;
				if(i == 2)
					return 'o';
			}
		}
		
		// Check rows
		for(let j = 0; j < 3; j++) {
			for(let i = 0; i < 3; i++) {
				if(this._field[j][i] != 'x')
					break;
				if(i == 2)
					return 'x';
			}
		}

		for(let j = 0; j < 3; j++) {
			for(let i = 0; i < 3; i++) {
				if(this._field[j][i] != 'o')
					break;
				if(i == 2)
					return 'o';
			}
		}

		// Check diagonal
		if (this._field[1][1] != null) {
			if (this._field[0][0] == this._field[1][1] & this._field[2][2] == this._field[1][1]) {
				return this._field[1][1];
			}
			if (this._field[2][0] == this._field[1][1] & this._field[0][2] == this._field[1][1]) {
				return this._field[1][1];
			}
		}

		if (this._turn == 9) {
			return 'draw';
		}

		return 'in_process';
	}

	isFinished() {
		if (this._get_match_status() == 'in_process') {
			return false;
		}
		return true;
	}

	getWinner() {
		let result = this._get_match_status();
		if (result == 'in_process' | result == 'draw') {
			return null;
		} else {
			return result;
		}
	}

	noMoreTurns() {
		if (this._turn == 9) {
			return true;
		} else {
			return false;
		}
	}

	isDraw() {
		if (this._get_match_status() == 'draw') {
			return true;
		} else {
			return false;
		}
	}

	getFieldValue(rowIndex, colIndex) {
		return this._field[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
