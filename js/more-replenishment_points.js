function showMap(type) {
    const mapCont = document.getElementById('map');

    mapCont.innerHTML = ''; 



    const iframe = document.createElement('iframe');
    iframe.src = getMapLink(type);
    iframe.width = '370';
    iframe.height = '530';
    iframe.style.border = '0';
    iframe.allowfullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerpolicy = 'no-referrer-when-downgrade';

    mapCont.appendChild(iframe);
}

function getMapLink(type) {
    if (type === 'atm') {
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.8160219759761!2d30.636126381208506!3d50.46514665995095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daa80c9cfaeb%3A0xf902c8fd02a037f3!2zS29ycHVzIEEsINCy0YPQu9C40YbRjyDQmtGW0L7RgtC-LCAxOSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1710407734269!5m2!1sru!2sua';
    } else if (type === 'bank') {
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0495384145734!2d30.6297493793457!3d50.45880220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daaa56250f45%3A0xe59786ce82ddda6!2z0YPQuy4g0JPQvdCw0YLQsCDQpdC-0YLQutC10LLQuNGH0LAsIDHQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1710408049387!5m2!1sru!2sua';
    } else if (type === 'terminals') {
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.8014325728743!2d30.643220518814363!3d50.46711955055587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4db3e9eca46bb%3A0x9dba45cc5e59899d!2sROZETKA!5e0!3m2!1sru!2sua!4v1710407848984!5m2!1sru!2sua';
    }
}
