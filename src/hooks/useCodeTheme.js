import { useEffect } from "react";

export default () => {
  useEffect(() => {
    document.querySelectorAll("p").forEach((e) => {
      const regex = /<span class="(__sys-d|__brkt|key-word){1}">/;
      regex.test(e.innerHTML);
      if (regex.test(e.innerHTML)) {
        return;
      }

      var insides = e.innerHTML;

      insides = insides.replace(/(\s.+:)/, '<span class="__sys-d">$1</span>');

      insides = insides.replace(
        /(\(|\)|\[|\])/g,
        '<span class="__brkt">$1</span>',
      );
      // declaration
      insides = insides.replace(
        /(\w*\s=)/g,
        '<span class="__brkt">$1&nbsp;</span>',
      );

      // return
      insides = insides.replace(
        /(return|\sas\s)/g,
        '<span class="__rtn">$1</span>',
      );
      // or
      insides = insides.replace(/(\s\|\s)/g, '<span class="__brkt">$1</span>');
      insides = insides.replace(
        /(def|import)/g,
        '<span class="key-word">$1</span>',
      );
      insides = insides.replace(/cls/g, '<span class="key-word">class</span>');
      insides = insides.replace(
        /(:|self)/g,
        '<span class="__bs-font-color">$1</span>',
      );

      insides = insides.replace(
        /('(\w*(\/+)?)\w*')/g,
        '<span class="__str">$1</span>',
      );

      e.innerHTML = insides;
    });

    return () => {};
  }, []);
};
