---
layout: default
title: Redirect
permalink: /go/surfshark
---

<script>
  (function() {
    var url = "{{ site.go_defaults.surfshark }}";
    if (!url || url.trim() === "") {
      document.body.innerText = "推广链接尚未配置";
      return;
    }
    window.location.replace(url);
  })();
</script>
