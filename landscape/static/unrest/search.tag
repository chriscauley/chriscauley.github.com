// A general purpos searching tag
<search>
  <form onsubmit={ search }>
    <input name="q" onkeyup={ search }>
    <div class="search_results rows">
      <div onclick={ parent.opts.select } each={ search_results } class="fourth btn btn-primary">
        <img if={ thumbnail } riot-src="{ thumbnail }" />
        <div class="name">{ name }</div>
      </div>
    </div>
  </div>
      
  var that = this;
  var search_timeout;
  search(e) {
    var q = that.q.value;
    if (!q || q.length < 3) { return }
    bounceSearch();
  }
  function bounceSearch() {
    uR.ajax({
      url: that.options.url,
      data: {q:that.q.value},
      field: that.q,
      success: function(data) {
        that.search_results = data;
        that.update();
      }
    });
  }
  bounceSearch = uR.debounce(bounceSearch);
</search>
