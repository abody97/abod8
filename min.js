        function generateQRCode() {
            var qrcodeContainer = document.getElementById('qrcode');
            qrcodeContainer.innerHTML = ""; // إزالة الباركود السابق إن وجد
            var text = document.getElementById('text').value; // الحصول على النص من حقل الإدخال
            if(text) {
                new QRCode(qrcodeContainer, {
                    text: text,
                    width: 128,
                    height: 128,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
                document.getElementById('save-btn').style.display = 'inline'; // عرض زر الحفظ
                
                // تأخير للسماح بتحميل الباركود ثم إضافة الفئة للتأثير
                setTimeout(() => {
                    var canvas = qrcodeContainer.querySelector('canvas');
                    if(canvas) {
                        canvas.classList.add('show');
                    }
                }, 100); // قد تحتاج إلى ضبط التوقيت بناءً على سرعة توليد الباركود
            } else {
                alert("الرجاء إدخال النص أو الرابط");
            }
        }

        document.getElementById('save-btn').addEventListener('click', function() {
            var canvas = document.querySelector('#qrcode canvas');
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = image;
            link.click();
        });
