---
layout: default
title: Redirect
permalink: /go/privatevpn
---

<script>
  (function() {
    var url = "{{ site.go_defaults.privatevpn }}";
    if (!url || url.trim() === "") {
      document.body.innerText = "推广链接尚未配置";
      return;
    }
    window.location.replace(url);
  })();
</script>
