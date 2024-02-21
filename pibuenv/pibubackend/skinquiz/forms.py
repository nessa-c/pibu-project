from django import forms

class QuizForm(forms.Form):
    skin_type = forms.MultipleChoiceField(choices=[('Oily', 'Oily'), ('Dry', 'Dry'), ('Combination', 'Combination'), ('Sensitive', 'Sensitive'), ('Normal', 'Normal')])
    concerns = forms.MultipleChoiceField(choices=[('Acne', 'Acne'), ('Sun Damage', 'Sun Damage'), ('Hyperpigmentation', 'Hyperpigmentation'), ('Dullness', 'Dullness'), ('Fine Lines', 'Fine Lines'), ('Intense Dryness', 'Intense Dryness'), ('Redness', 'Redness'), ('Texture', 'Texture'), ('Blackheads', 'Blackheads')])
    budget = forms.IntegerField()
    personal_values = forms.MultipleChoiceField(choices=[('100% natural', '100% natural'), ('Cruelty-Free', 'Cruelty-Free'), ('Clean Manufacturing', 'Clean Manufacturing'), ('Ethical Leadership', 'Ethical Leadership'), ('Locally Manufactured', 'Locally Manufactured'), ('Organic', 'Organic'), ('Recyclable Packaging', 'Recyclable Packaging'), ('Inclusivity', 'Inclusivity'), ('Plastic-Free', 'Plastic-Free')])
    allergies = forms.MultipleChoiceField(choices=[('Fragrance', 'Fragrance'), ('Preservatives', 'Preservatives'), ('Nickel', 'Nickel'), ('Sulfates', 'Sulfates'), ('Essential Oils', 'Essential Oils'), ('Propylene Glycol', 'Propylene Glycol'), ('Retinoids', 'Retinoids'), ('Lanolin (Wool)', 'Lanolin (Wool)'), ('Latex', 'Latex'), ('Methylisothiazolinone (MI)', 'Methylisothiazolinone (MI)'), ('Cocamidopropyl Betaine', 'Cocamidopropyl Betaine')])
    lifestyle = forms.MultipleChoiceField(choices=[('Wear Makeup', 'Wear Makeup'), ('Often Outside', 'Often Outside'), ('Irregular/Lack of Sleep', 'Irregular/Lack of Sleep'), ('Stressed', 'Stressed'), ('Dehydrated', 'Dehydrated')])
    skincare_routine = forms.MultipleChoiceField(choices=[('Cleanser', 'Cleanser'), ('Toner', 'Toner'), ('Serum', 'Serum'), ('Exfoliant', 'Exfoliant'), ('Moisturizer', 'Moisturizer'), ('Sunscreen', 'Sunscreen')])
