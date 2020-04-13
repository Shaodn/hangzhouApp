import productlist from './productlist2.json'

function searchkey(keyword){
	
	let searchResult=[]
	for(let catname in productlist){
		for(let index in productlist[catname]){
			if(productlist[catname][index]['pname'].toLowerCase().indexOf(keyword.toLowerCase())!=-1||productlist[catname][index]['catch'].indexOf(keyword.toLowerCase())!=-1){
				searchResult.push({
					"level2id":catname,
					"productid":index,
					"productname":productlist[catname][index]['pname'],
					"catch":productlist[catname][index]['catch'],
					"pid":productlist[catname][index]['pid'],
				})
			}
		}
	}
	return searchResult
}

export default {
	searchkey
}
