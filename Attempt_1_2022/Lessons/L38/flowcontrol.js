const slugish = (sentence, lowercase) => {
	slug = sentence.replace(/\s/g, '-');
	if(lowercase){
		return slug.toLowerCase();
	}
	return slug;
};

