import fileSaver from 'file-saver';

export default class File{
	
	static save(headers, levelData){
		
		function normalize(data){
			let string = "";
			data.map((x) => {
				x.map((y, index) => {
					string += y + ((index + 1) < 10 ? "," : "\n");
				})
			})
			return string;
		};
		
		let data = [
			headers,
			...levelData
		];
		data = normalize(data);
		
		const content = new Blob([data], {
            type: 'text/csv;charset=utf-8',
        });
		
		fileSaver.saveAs(content, `teste.csv`);
	}
	
}