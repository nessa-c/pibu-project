from django.db import models

# Define choices for target concerns
TARGET_CONCERNS_CHOICES = [
    ('redness', 'Redness'),
    ('dryness', 'Dryness'),
    ('irritation', 'Irritation'),
    ('uneven-ness', 'Uneven-ness'),
    ('dullness', 'Dullness'),
    ('fine lines', 'Fine lines'),
    ('texture', 'Texture'),
    ('oiliness', 'Oiliness'),
    ('sun protection', 'Sun protection'),
    ('hydration', 'Hydration'),
    ('brightening', 'Brightening'),
    ('acne', 'Acne'),
    ('blackheads', 'Blackheads'),
    ('dehydration', 'Dehydration'),
    ('aging', 'Aging')
]

# Define choices for product features
PRODUCT_FEATURES_CHOICES = [
    ('non-comedogenic', 'Non-comedogenic'),
    ('cruelty-free', 'Cruelty-free'),
    ('vegan', 'Vegan'),
    ('sulfate-free', 'Sulfate-free'),
    ('paraben-free', 'Paraben-free'),
    ('unscented', 'Unscented'),
    ('fragrance-free', 'Fragrance-free'),
    ('phthalate-free', 'Phthalate-free'),
    ('clean ingredients', 'Clean ingredients'),
    ('sustainable packaging', 'Sustainable packaging'),
    ('dye-free', 'Dye-free'),
    ('lightweight', 'Lightweight'),
    ('non-greasy', 'Non-greasy'),
    ('quick-absorbing', 'Quick-absorbing'),
    ('water-resistant', 'Water-resistant'),
    ('oil-free', 'Oil-free'),
    ('alcohol-free', 'Alcohol-free'),
    ('silicone-free', 'Silicone-free'),
    ('natural ingredients', 'Natural ingredients')
]

# Define choices for skin type preference
SKIN_TYPE_PREFERENCE_CHOICES = [
    ('dry', 'Dry'),
    ('oily', 'Oily'),
    ('combination', 'Combination'),
    ('sensitive', 'Sensitive'),
    ('normal', 'Normal')
]

class Products(models.Model):
    product_id = models.IntegerField(primary_key=True)
    brand_id = models.IntegerField()
    retailer_id = models.IntegerField()
    product_name = models.CharField(max_length=255)
    product_category = models.CharField(max_length=50)
    product_type = models.CharField(max_length=50)
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
    target_concerns = models.CharField(max_length=255, choices=TARGET_CONCERNS_CHOICES)
    product_features = models.CharField(max_length=255, choices=PRODUCT_FEATURES_CHOICES)
    ingredient_list = models.TextField()
    recommended_weekly_usage_frequency = models.SmallIntegerField()
    skin_type_preference = models.CharField(max_length=255, choices=SKIN_TYPE_PREFERENCE_CHOICES)
    active_ingredients = models.TextField()
    image_link = models.CharField(max_length=10000)
